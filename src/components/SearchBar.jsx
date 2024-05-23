//import { useState } from "react";

function SearchBar({onChange}) {
  
  return (
    <div>
      <input type="search" placeholder="Search for a product.." onChange={onChange}/>
      <br />
      <input type="checkbox" name="instock"/><label htmlFor="instock">Only show products in stock</label>
    </div>
  );
}

export default SearchBar;