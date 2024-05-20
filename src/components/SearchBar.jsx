function SearchBar({ searchQuery, setSearchQuery, showInStockOnly, setShowInStockOnly }) {
	return (
		<>
			<p>Search {searchQuery && 'for: ' + searchQuery}</p>
			<input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

			<p>
				<input type="checkbox" id="inStock" name="inStock" value="inStock" checked={showInStockOnly} onChange={(e) => setShowInStockOnly(e.target.checked)} />

				<label htmlFor="inStock"> Only show products in stock</label>
			</p>
		</>
	)
}

export default SearchBar
