import { useState } from "react";
import jsonData from "../data/data.json"
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function ProductsPage({ className = "" }) {
    const [ products, setProducts ] = useState( jsonData ) 
    const [ searchText, setSearchText ] = useState("")
    const [ checkStock, setCheckStock ] = useState(false)

    const onSearch = ( value ) => setSearchText( value );

    const onCheckStock = ( checked ) => setCheckStock( checked );

    return (
        <div className={`w-50 text-center ${className}`}>
            <h1> IronStore </h1>
            <SearchBar search={searchText} onSearch={onSearch} checkStock={checkStock} onCheckStock={onCheckStock} className="mb-5"/>
            <ProductTable products={products} searchText={searchText} checkStock={checkStock} />
        </div>
    )
}

export default ProductsPage;