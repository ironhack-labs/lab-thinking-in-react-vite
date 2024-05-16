import { useState } from "react";


const SearchBar = (props) => {

const [search, setSearch] = useState("");

const propsCopy = [...props.allProducts];
    
const handleSearch = (event) => {
    setSearch(event.target.value);
    propsCopy.filter(event.target.value);
};
    
    return (
        <div>
            
            <form>
            <label>Search</label>
                <input type="text" name="searchedValue" value={search} onChange={handleSearch}/>
            </form>
            <form action="/tick">
                <input type="checkbox" name="inStock"/>
                <label> Only show products in stock </label>
            </form>

        </div>

    );
};

export default SearchBar