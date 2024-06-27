import { products as initialProducts } from "./mocks/products"
import Products from "./components/Products/Products"
import Filters from "./components/Filters/Filters"
import Carts from "./components/Carts/Carts"
import { useState } from "react"
function App() {
  const [ allProducts, setAllProducts ] = useState(initialProducts)
  const [ carts, setCarts ] = useState([])
  return (
    <>  
      <div className="App">
        <h1>e-commerce practice</h1>
        <Filters setFilteredProducts={setAllProducts} />
        <Carts carts={carts} setCarts={setCarts} />
        <Products products={allProducts} carts={carts} setCarts ={setCarts} />
      </div>
    </>
  )
}

export default App
