import ProductRow from './ProductRow'

function ProductTable({products}) {
	return (
		<>
			<div>ProductTable</div>
			<ProductRow products={products} />
		</>
	)
}

export default ProductTable
