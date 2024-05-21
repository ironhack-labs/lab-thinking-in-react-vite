import ProductRow from './ProductRow'

function ProductTable({ products, searchQuery, showInStockOnly, setShowInStockOnly }) {
	return (
		<>
			<div>ProductTable</div>
			<ProductRow products={products} searchQuery={searchQuery} showInStockOnly={showInStockOnly} setShowInStockOnly={setShowInStockOnly} />
		</>
	)
}

export default ProductTable
