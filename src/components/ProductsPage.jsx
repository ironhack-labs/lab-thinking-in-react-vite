import { Profiler, useState } from "react";
import SearchBar from "./SearchBar";
import ProductsTable from "./ProductsTable";
import jsonData from "../data.json";

export default function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filter, setFilter] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  
  const handleFilter = (e) => {
    setFilter(e.target.value);
  }
  const handleCheckbox = (e) => {
    setCheckbox(e.target.checked);
  }

  const filteredProducts = products.filter((product) => {
    if(checkbox){
      return product.inStock && product.name.toLowerCase().includes(filter.toLowerCase());
    }else{
      return product.name.toLowerCase().includes(filter.toLowerCase());
    }
  });

  return (
    <div>
        <h1 className="text-4xl font-bold text-center">IronStore</h1>
        <SearchBar handleFilter={handleFilter} filter={filter} checkbox={checkbox} handleCheckbox={handleCheckbox}/> 
        <ProductsTable products={filteredProducts} />
    </div>

  )
}
