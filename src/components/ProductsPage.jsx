import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <>
      <h1>IronStore</h1>
      <SearchBar allProducts={products}/>
      <ProductTable allProducts={products} />
    </>
  );
}

export default ProductsPage;