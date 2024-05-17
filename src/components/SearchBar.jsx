import { useState } from "react";


const SearchBar = (props) => {

const [search, setSearch] = useState("");
const [filter, setFilter] = useState(props.allProducts);
const [inStock, setInStock] = useState(false)
    
const handleSearch = event => {
     
    setSearch(event.target.value);
    const filteredProducts = props.allProducts.filter(product => (product.name.toLowerCase()).includes(search.toLowerCase()));
    setFilter(filteredProducts);
    console.log(filteredProducts) // sth is wrong with filtering - it filters only every second letter


/* how to pass it to the table?? */
/*     return (
        filter.map(product => (
            <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>

            </tr>
        ))
    ) */

};

const handleInStock = (event) => {
    setInStock(event.target.checked);
    props.allProducts.filter(productDetails => {return (productDetails.inStock ? productDetails : "")})
}
    
    return (

            <>
            <form>
            <label>Search <br/></label>
                <input className="search-window" type="text" name="searchedValue" value={search} onChange={handleSearch}/>

            </form>

            <form>
                <input type="checkbox" name="inStock" checked={inStock} onChange={handleInStock}/>
                <label> Only show products in stock </label>
            </form>

                {filter.map(product => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>

                </tr>
                ))}

            </>

    );
};

export default SearchBar