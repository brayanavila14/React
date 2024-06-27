import { products as initialProducts } from "../../mocks/products.json"
import { useState, useEffect } from 'react'
import './Filters.css';
import PropTypes from "prop-types";

export default function Filters({ setFilteredProducts }) {
    const products = initialProducts
    const [search, setSearch] = useState('')
    const handleChangeSearch = (event) => {
        setSearch(event.target.value)
    }
    useEffect(() => {
        const filteredProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
        if (search === '') {
            setFilteredProducts(products)
        } else {
            setFilteredProducts(filteredProducts)
        }
    }, [search])
    const handleChangeCategory = (event) => {
        if (event.target.value === 'all') {
            setFilteredProducts(products)
        } else {
            const filteredProducts = products.filter(product => product.category === event.target.value)
            setFilteredProducts(filteredProducts)
        }
    }
    
    return (
        <div className="filters">
            <div className="filters__search">
                <label htmlFor="search-input">Search:</label>
                <input id='search-input' type="text" placeholder="Search..." value={search} onChange={handleChangeSearch}/>
            </div>
            <div className="filters__sort">
                <label htmlFor="filter-select">Filter:</label>
                <select id='filter-select' onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="home-decoration">home-decoration</option>
                    <option value="laptops">laptops</option>
                    <option value="smartphones">smartphones</option>
                    <option value="fragrances">fragrances</option>
                    <option value="skincare">skincare</option>
                </select>
            </div>
        </div>
    )
}
Filters.propTypes = {
    products: PropTypes.array.isRequired,
    setFilteredProducts: PropTypes.func.isRequired,
};