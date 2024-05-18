import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState("");
  const [inStock, setInStock] = useState(false);

  const handleSearch = value => {
   
    const filteredProducts = jsonData.filter(product => {
      return product.name.toLowerCase().includes(value.toLowerCase())
    });
    setProducts(filteredProducts);

    setSearch(value);

  };



   const handleInStock = event => {

    if(event.target.checked) {

      const filteredInStock = jsonData.filter(productDetails => {
        return productDetails.inStock ? true : false
      }) 
      setProducts(filteredInStock) 

    } else {

      setProducts(jsonData) 
    }


    setInStock(event.target.checked)
  } 


  return (
    <>
      <h1>IronStore</h1>
      <SearchBar allProducts={products} searchValue={search} filterProducts={handleSearch} tickBoxValue={inStock} isInStock={handleInStock} />
      <ProductTable allProducts={products} />
    </>
  );
}

export default ProductsPage;