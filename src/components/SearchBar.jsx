/* eslint-disable react/prop-types */
const SearchBar = ({ search, handleSearch, toggleInStockOnly }) => {
  return (
    <form className="">
      <input type="checkbox" onChange={(e) => toggleInStockOnly(e)} />
      <label htmlFor="inStock">Only show products in stock</label>
      <input type="text" value={search} onChange={(e) => handleSearch(e)} />
      <label htmlFor="search">Search</label>
    </form>
  );
};

export default SearchBar;
