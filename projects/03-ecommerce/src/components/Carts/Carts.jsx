import { useId, useEffect, useRef } from 'react';
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from '../Icons';
import './Carts.css';
import PropTypes from "prop-types";

function CartItem({ product, setCarts, carts }) {
    const addToCart = () => {
        const productInCartIndex = carts.findIndex(item => item.id === product.id)
        if (productInCartIndex !== -1) {
            setCarts(carts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: typeof item.quantity === 'number' ? item.quantity + 1 : 1 }
                    : item
            ))
        } else {
            setCarts([...carts, { ...product, quantity: 1 }])
        }
    }
    const removeFromCart = () => {
        const productInCartIndex = carts.findIndex(item => item.id === product.id)
        if (productInCartIndex !== -1) {
            if (carts[productInCartIndex].quantity === 1) {
                setCarts(carts.filter(item => item.id !== product.id))
            } else {
                setCarts(carts.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item))
            }
        }
    }
    const removeProduct = (product) => {
        setCarts(carts.filter(item => item.id !== product.id))
    }
    return (
        <li className="cart-item">
            <img src={product.thumbnail} alt={product.title} />
            <div className="item-details">
                <p className="name">{product.title}</p>
                <p className="price">${product.price}</p>
            </div>
            <div className='item-actions'>
                <div className='item-quantity'>
                    <button onClick={removeFromCart}>-</button>
                    <span className='quantity'>{product.quantity}</span>
                    <button onClick={addToCart}>+</button>
                </div>
                <div className='item-button'>
                    <button onClick={() => { removeProduct(product) }}>
                        <RemoveFromCartIcon />
                    </button>
                </div>
            </div>
        </li>
    )
}

CartItem.propTypes = {
    product: PropTypes.object.isRequired,
    setCarts: PropTypes.func.isRequired,
    carts: PropTypes.array.isRequired
}

export default function Carts({ carts, setCarts }) {
    const cartId = useId()
    const cartRef = useRef()

    const clearCart = () => {
        document.getElementById(cartId).checked = false;
        setCarts([])
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                document.getElementById(cartId).checked = false;
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [cartRef, cartId]);
    return (
        <>
            <label className='cart-button' htmlFor={cartId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartId} hidden />
            <h3>Carrito</h3>
            <aside className="cart" ref={cartRef}>
                <ul>
                    {
                        carts.map((product) => (
                            <CartItem product={product} setCarts={setCarts} carts={carts} key={product.id} />
                        ))
                    }
                </ul>
                <button className='btn-clear' onClick={clearCart}>
                    <ClearCartIcon />
                </button>
                <div className='totales'>
                    <p>Total Price: ${carts.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
                    <p>Total Quantity: {carts.reduce((acc, item) => acc + item.quantity, 0)}</p>
                </div>
            </aside>
        </>
    );
}

Carts.propTypes = {
    carts: PropTypes.array.isRequired,
    setCarts: PropTypes.func.isRequired
};