import { useState } from "react";
import jsonData from "/src/data.json";
import ProductTable from './ProductTable'
import SearchBar from "./SearchBar";

export default function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <h1>IronStore</h1>

      <SearchBar products={products} setProducts={setProducts} />

      <ProductTable products={products} />
    </div>
  );
}