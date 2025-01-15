import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products] = useState(jsonData);
  const [searchValue, setSearchValue] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchValue={searchValue} onSearchChange={setSearchValue} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
