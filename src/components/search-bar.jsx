function SearchBar({setSearch, setStock}) {
    return (
        <div className="d-flex flex-column align-items-center gap-3 w-100">
            <p className="m-0 text-center">Search</p>
            
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Product..." aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setSearch(e.target.value)}/>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={(e) => setStock(e.target.checked)}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                   Only show products in stock
                </label>
            </div>

        </div>
    )
}

export default SearchBar;