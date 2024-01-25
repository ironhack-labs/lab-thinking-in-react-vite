// src/components/ProductsPage.jsx
import ProductTable from "./ProductsTable"
import SearchBar from "./SearchBar"

function ProductsPage() {

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable />
    </div>
    
  );
}

export default ProductsPage;