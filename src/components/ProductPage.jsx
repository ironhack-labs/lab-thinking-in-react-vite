import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductPage () {
    const [products, setProducts] = useState(jsonData);
    const [search, onSearch] = useState("");
    const [stock, onStock] = useState(false);

    return (
        <div className="m-5">
            <h1>IronStore</h1>
            <SearchBar search={search} onSearch={onSearch} stock={stock} onStock={onStock}  />
            <ProductTable products={products} search={search} stock={stock} />
        </div>
    );
}

export default ProductPage;