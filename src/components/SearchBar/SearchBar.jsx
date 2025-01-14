import './SearchBar.css'
import { useState } from "react";

function SearchBar ({name, setName, products, onStockFilterChange, onlyInStock}) {
    const [check, setCheck] = useState(false)




    

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
                onChange={(e) => {
                        setCheck(e.target.checked);
                        onStockFilterChange(e.target.checked);
                    }}
                 />
                <label id="check" >Only show products in stock</label>
            </div>
        </div>

    )
}

export default SearchBar