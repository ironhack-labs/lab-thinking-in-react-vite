
function SearchBar({ onSearch, onCheckStock }) {
    
    return (
        <nav className="navbar bg-body-tertiary mt-4">
            <div className="container-fluid">
                <form className="d-flex flex-grow-1" role="search">
                    <input className="form-control mt-2" type="search" onChange={(event) => onSearch(event.target.value)} placeholder="Search..." aria-label="Search" />
                </form>
            </div>
            <div className="form-check mt-3 mx-auto">
                <input className="form-check-input" type="checkbox" onChange={(event) => onCheckStock(event.target.checked)} id="check-stock" />
                <label className="form-check-label" htmlFor="check-stock">Only show products in stock</label>
            </div>
        </nav>
    );
}

SearchBar.defaultProps = {
    onSearch: () => {},
    onCheckStock: () => {}
}

export default SearchBar;