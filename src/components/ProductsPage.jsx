// src/components/ProductsPage.jsx

import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  function handleSearchBar(keyword, checkBox) {
    if(checkBox) {
      const filteredList = jsonData.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(keyword.toLowerCase()) && item.inStock
      });
      setProducts(filteredList);
    }
    else {
      const filteredList = jsonData.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(keyword.toLowerCase())
      });
      setProducts(filteredList);
    }
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        productList={products}
        onChange={(keyword, checkBox) => {
          handleSearchBar(keyword, checkBox);
        }}
      />
      <ProductTable productList={products} />
    </div>
  );
}

export default ProductsPage;
