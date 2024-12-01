function SearchBar({ searchText, onSearch, checkStock, onCheckStock, className ="" }) {
    return (
        <div className={`d-flex flex-column text-center gap-2 ${className}`}>
            <label htmlFor="search-bar"> Search </label>
            <input 
                type="text" 
                id="search-bar"
                placeholder="Search..."
                value={searchText}
                onChange={ event => onSearch( event.target.value )} />

            <div className="d-flex gap-2 justify-content-center">
                <input
                    type="checkbox"
                    value={checkStock}
                    onChange={ event => onCheckStock( event.target.checked ) }
                    id="check-stock" />
                <label htmlFor="check-stock"> Only show products in stock. </label>
            </div>
        </div>
        
    )
}

export default SearchBar;
