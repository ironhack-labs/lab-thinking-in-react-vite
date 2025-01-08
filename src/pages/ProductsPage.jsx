import { useState } from "react"
import jsonData from "../data.json";

import ProductTable from "../components/ProductTable";
import ProductRow from "../components/ProductRow";
import SearchBar from "../components/SearchBar";

function ProductsPage() {
  const [products] = useState(jsonData);
  const [inputText, setInputText] = useState('');
  const [onStock, setOnStock] = useState(false);

  const filteredProducts = products.filter((product) =>{
    const machedText = product.name.toLowerCase().includes(inputText.toLowerCase())
    const machedStock = !onStock || product.inStock 
    return machedText && machedStock
  })  

  return (
    <>
      <SearchBar inputText={inputText} setInputText={setInputText} stock={setOnStock}/>
      <ProductTable products={filteredProducts}/>
      
    </>
  );
}
export default ProductsPage;