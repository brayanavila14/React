export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || []

export const cartAction = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CARTS: 'CLEAR_CARTS'
}
export const updateLocalStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
    [cartAction.ADD_TO_CART]: (state, action) => {
        const { id } = action.payload
        const product = state.find((product) => product.id === id)
        if (product >= 0) {
            const newState = [
                ...state.slice(0, product, 
                    { 
                        ...state[product], 
                        quantity: state[product].quantity + 1 
                    },
                ...state.slice(product + 1))
            ]
            updateLocalStorage(newState)
            return newState
        }
        const newState = [...state, 
            { ...action.payload, quantity: 1 }
        ]
        updateLocalStorage(newState)
        return newState
    },
    [cartAction.REMOVE_FROM_CART]: (state, action) => {
        const { id } = action.payload
        const newState = state.filter((product) => product.id !== id)
        updateLocalStorage(newState)
        return newState
    },
    [cartAction.CLEAR_CARTS]: () => { 
        updateLocalStorage([])
        return []
    }
}
export const cartReducer = (state, action) => { 
    const { type: actionType } = action
    const updateState = UPDATE_STATE_BY_ACTION[actionType]
    return updateState ? updateState(state, action) : state
}