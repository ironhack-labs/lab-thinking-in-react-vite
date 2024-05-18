
const SearchBar = (props) => {


const handleSearch = (event) => {
    props.filterProducts(event.target.value)
}
    
    return (

            <>
            <form>
            <label>Search <br/></label>
                <input className="search-window" type="text" name="searchedValue" value={props.searchValue} onChange={handleSearch}/>

            </form>

            <form>
                <input type="checkbox" name="inStock" checked={props.tickBoxValue} onChange={props.isInStock}/>
                <label> Only show products in stock </label>
            </form>

            </>

    );
};

export default SearchBar