import { useReducer, createContext,  } from "react";
import PropTypes from "prop-types";
import { cartReducer, cartInitialState } from "../reducers/cart.js";

export const cartContext = createContext();

function useCartReducer () {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product })
    }
    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id } })
    }
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    return { state, addToCart, removeFromCart, clearCart }
}
export function CartProvider({ children }) {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
    return (
        <cartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </cartContext.Provider>
    )
}
CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}