import { useState } from "react"
import jsonData from "../data.json";

import ProductTable from "../components/ProductTable";
import ProductRow from "../components/ProductRow";
import SearchBar from "../components/SearchBar";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <>
      
      <SearchBar/>
      <ProductTable />
      {products.map((product) => {
        return <ProductRow key={product.id} product={product} />;
      })}
    </>
  );
}
export default ProductsPage;