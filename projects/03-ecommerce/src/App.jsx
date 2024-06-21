import Products from './components/Products/Products'
import Filters from './components/Filters/Filters'

function App() {
  return (
    <>  
      <div className="App">
        <h1>Productos</h1>
        <Filters />
        <Products />
      </div>
    </>
  )
}

export default App
