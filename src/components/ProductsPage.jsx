import { useState } from "react";
import jsonData from "../data.json";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState("");
  const [inStockOnly, setInStockOnly] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredProducts = jsonData.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filteredProducts);
    search === "" && setProducts(jsonData);
  };

  const toggleInStockOnly = (e) => {
    const isChecked = e.target.checked;
    setInStockOnly(isChecked);
    const filteredProducts = jsonData.filter((product) =>
      isChecked ? product.inStock : true
    );
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        search={search}
        handleSearch={handleSearch}
        toggleInStockOnly={toggleInStockOnly}
      />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
