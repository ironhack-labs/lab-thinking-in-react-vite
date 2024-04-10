import { useState } from 'react';
import jsonData from './../../data.json';
import SearchBar from '../search-bar/SearchBar';
import ProductTable from '../product-table/ProductTable';

function ProductsPage() {
    
    const [ searchText, setSearchText ] = useState('');
    const [ isInStock, setIsInStock ] = useState(false);
    
    const handleCheckStock = (isChecked) => {     
        setIsInStock(isChecked);
    }
   
    const handleSearch = (text) => {
        setSearchText(text);
    }

    const allSearchResults = jsonData.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
    const inStockSearchResults = allSearchResults.filter(product => product.inStock);
    const products = isInStock ? inStockSearchResults : allSearchResults;
     
    return (
        <div className='container mt-4'>
            <h1>IronStore</h1>
            <SearchBar onSearch={handleSearch} onCheckStock={handleCheckStock} />
            <ProductTable products={products} message="No products matches" />
        </div>
    );
}

export default ProductsPage;