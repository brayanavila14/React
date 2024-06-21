import useApi from "../../hooks/useApi"
import { AddToCartIcon, RemoveFromCartIcon  } from "../Icons"
import useCart from "../../hooks/useCart"
import './Products.css'
function Products() {
    const data = useApi('https://fakestoreapi.com/products')
    const { cart, addToCart, removeFromCart } = useCart()
    const isAdded = product => {
        return cart.some(item => item.id === product.id)
    }
    return (
        <main className="products">
            <ul>
                {data.slice(0, 10).map((product) => (
                    <li key={data.id}>
                        <h3>{data.title}</h3>
                        <img src={product.image} alt={product.title} />
                        <span>{product.category}</span>
                        <span>${product.price}</span>
                    </li>
                ))}
                {
                    <button
                    style={{ backgroundColor: isAdded ? 'red' : 'green'}}
                    onClick={
                        isAdded ? 
                        () => removeFromCart(data) 
                        : 
                        () => addToCart(data)
                    }
                    >
                    {isAdded ? <RemoveFromCartIcon /> : <AddToCartIcon />}  
                    </button>
                }
            </ul>
        </main>
    )
}
export default Products