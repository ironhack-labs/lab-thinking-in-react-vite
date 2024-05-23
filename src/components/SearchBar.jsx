import { useState } from "react";
import PropTypes from "prop-types";

function SearchBar({ onChange }) {
  const [keyword, setKeyword] = useState("");
  const [checkBox, setcheckBox] = useState(false);

  return (
    <div>
      <input
        type="search"
        placeholder="Search for a product.."
        onChange={(e) => {
          setKeyword(e.target.value);
          onChange(e.target.value, checkBox);
        }}
      />
      <br />
      <input
        type="checkbox"
        name="instock"
        onChange={(e) => {
          setcheckBox(e.target.checked);
          onChange(keyword, e.target.checked);
        }}
      />
      <label htmlFor="instock">Only show products in stock</label>
    </div>
  );
}

SearchBar.propTypes = {
  onChange: PropTypes.func,
};
export default SearchBar;
