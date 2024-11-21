
function SearchBar ({search, onSearch, stock, onStock}) {
    return (
        <div>
            <input
                value={search}
                onChange={(event) => {
                    onSearch(event.target.value);
                }}
            id="search"
            type="text"
            placeholder="Search"
            className="form-control mb-3"
            />
            <div>
                <input
                    checked={stock}
                    onChange={(event) => {
                        onStock(event.target.checked);
                    }}
                    type="checkbox"
                    id="inStock" />
                    <label for="inStock">Only show products in Stock</label>
            </div>
        </div>
    )
}

export default SearchBar;