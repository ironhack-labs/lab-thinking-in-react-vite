import { useState } from "react"
import jsonData from "../data.json";

import ProductTable from "../components/ProductTable";
import ProductRow from "../components/ProductRow";
import SearchBar from "../components/SearchBar";

function ProductsPage() {
  const [products] = useState(jsonData);
  const [inputText, setInputText] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(inputText.toLowerCase())
  )
  return (
    <>
      <SearchBar inputText={inputText} setInputText={setInputText}/>
      <ProductTable products={filteredProducts}/>
      
    </>
  );
}
export default ProductsPage;