import { useState } from "react";
import jsonData from "./../../data.json";
import SearchBar from "../SearchBar/SearchBar"
import ProductTable from "../ProductTable/ProductTable"


function ProductsPage () {
    const [products, setProducts] = useState(jsonData);
    const [name, setName] = useState("")
    const [onlyInStock, setOnlyInStock] = useState(false);

    const stockProcucts = products.filter((product)=>{
        const filteredProducts  = onlyInStock ? product.inStock : true;
        const searchProducts = product.name.toLowerCase().includes(name.toLowerCase());
        return filteredProducts && searchProducts
    });
     

    return(
        <>
            <div>
                <h1>IronStore</h1>
                <SearchBar onlyInStock={onlyInStock} products={stockProcucts} name={name} setName={setName}  onStockFilterChange={setOnlyInStock} />
            </div>
            <div>
                <ProductTable products={stockProcucts} />
            </div>
        </>
    )
}

export default ProductsPage