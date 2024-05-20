import { useState, useEffect } from 'react'

function SearchBar({ products, setProducts }) {
	const [typedThing, setTypedThing] = useState('')
	const [originalProducts, setOriginalProducts] = useState('')
	const [productsInStock, setProductsInStock] = useState(false)

	useEffect(() => {
		setOriginalProducts([...products])
	}, [])

	const handleFilter = (e) => {
		setTypedThing(e.target.value)

		const filteredProducts = originalProducts.filter((product) => {
			return product.name.toLowerCase().includes(e.target.value.toLowerCase())
		})

		setProducts(e.target.value ? filteredProducts : originalProducts)
	}

	const handleInStock = (e) => {
		e.target.checked ? setProductsInStock(true) : setProductsInStock(false)
	}

	useEffect(() => {
		let filteredProducts = originalProducts;

		if (productsInStock) {
            filteredProducts = filteredProducts.filter(product => product.inStock);
        }

		setProducts(filteredProducts);
	}, [productsInStock])


	return (
		<>
			<p>Search {typedThing && 'for: ' + typedThing}</p>
			<input type="text" onChange={handleFilter} />

			<p>
				<input type="checkbox" id="inStock" name="inStock" value="inStock" onChange={handleInStock} />
				<label htmlFor="inStock"> Only show products in stock</label>
			</p>
		</>
	)
}

export default SearchBar
