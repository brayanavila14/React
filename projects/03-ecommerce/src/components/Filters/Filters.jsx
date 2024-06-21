function Filters() {
    return (
        <div className="filters">
            <div className="filters__search">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="filters__select">
                <select>
                    <option value="all">All</option>
                    <option value="men's clothing">men´s clothing</option>
                    <option value="women's clothing">women´s clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                </select>
            </div>
        </div>
    )
}
export default Filters;