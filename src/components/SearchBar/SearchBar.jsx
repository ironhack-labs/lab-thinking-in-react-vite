import './SearchBar.css'

function SearchBar ({name, setName, products, onStockFilterChange, onlyInStock}) {
    

    return(

        <div className="search-bar">

            <label id="search">Search</label>
            <input 
                id="search" 
                type="search"
                value={name} 
                placeholder="Start typing to search..." 
                onChange={(e) => setName(e.target.value)}
            />
            <div className='checkbox'>
                <input 
                id="check"  
                type="checkbox"
                 onChange={(e) => onlyInStock(e.target.checked)}
                 />
                <label id="check" >Only show products in stock</label>
            </div>
        </div>

    )
}

export default SearchBar