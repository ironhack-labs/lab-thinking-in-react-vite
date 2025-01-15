/* eslint-disable react/prop-types */
function SearchBar({ searchValue, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
