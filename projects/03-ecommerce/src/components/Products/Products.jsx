import './Products.css'
import { AddToCartIcon } from '../Icons'
import PropTypes from "prop-types";

export default function Products({ products, setCarts, carts }) {
    const handleAddToCart = (product) => {
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
    return (
        <>
            <h3>Productos</h3>
            <div className="products">
                <ul>
                    {
                        products.length === 0 && <h1 className='notfound'>No hay Productos</h1>
                    }
                    {
                    products.map((product) => (
                        <li className='product' key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <h3>{product.title}</h3>
                            <p>{product.category}</p>
                            <span>${product.price}</span>
                        </div>
                        <div>
                            <button
                                onClick={() => handleAddToCart(product)}
                            >
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
Products.propTypes = {
    products: PropTypes.array.isRequired,
    setCarts: PropTypes.func.isRequired,
    carts: PropTypes.array.isRequired,
};