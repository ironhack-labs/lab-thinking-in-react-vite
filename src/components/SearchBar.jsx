export default function SearchBar({ searchQuery, handleSearch, inStockOnly, handleInStockChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleInStockChange}
        />
        Only show products in stock
      </label>
    </div>
  );
}