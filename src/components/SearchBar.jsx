function SearchBar({ inputText , setInputText, stock}) {
  return (
    <div>
      <input type="text" value={inputText} placeholder="Search..." onChange={(e) => {setInputText(e.target.value)}}/>
        <br />
        <input type='checkbox' onChange={(e) =>{stock(e.target.checked)}}/>
    </div>
  );
}
export default SearchBar;