// src/components/ProductsPage.jsx

import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchQuery, setSearchQuery] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleInStockChange = (event) => {  setInStockOnly(event.target.checked);};

  const filteredProducts = products.filter((product) => {
    const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesInStock = !inStockOnly || product.inStock;
    return matchesSearchQuery && matchesInStock;
  });


  return (
    <div>
      <h1>IronStore</h1>

      <SearchBar
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        inStockOnly={inStockOnly}
        handleInStockChange={handleInStockChange}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
