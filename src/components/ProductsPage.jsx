import { useState } from 'react'
import jsonData from '/src/data.json'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default function ProductsPage() {
	const [products, setProducts] = useState(jsonData)
	const [searchQuery, setSearchQuery] = useState('')
	const [showInStockOnly, setShowInStockOnly] = useState(false)

	return (
		<div>
			<h1>IronStore</h1>

			<SearchBar products={products} setProducts={setProducts} searchQuery={searchQuery} setSearchQuery={setSearchQuery} showInStockOnly={showInStockOnly} setShowInStockOnly={setShowInStockOnly} />

			<ProductTable 
        products={products} 
        searchQuery={searchQuery}         setSearchQuery={setSearchQuery} 
        showInStockOnly={showInStockOnly} 
        setShowInStockOnly={setShowInStockOnly} 
      />
		</div>
	)
}
