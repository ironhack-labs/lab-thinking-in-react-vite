// src/components/ProductsPage.jsx

import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
//{"category": "Sporting Goods",
//"price": "$49.99",    "inStock": true,
//"name": "Football",
//"id": "295a4dab-74b2-4e60-b3c2-c1346aba7585"},

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  // const [lisOfP,setlisOfP] = useState(products);
  function handleSearch(query) {
    const filteredList = jsonData.filter((person) => {
      return Object.values(person.name)
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setProducts(filteredList);
  }
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        productList={products}
        onChange={(e) => {
          console.log("hey", e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <ProductTable productList={products} />
    </div>
  );
}

export default ProductsPage;
