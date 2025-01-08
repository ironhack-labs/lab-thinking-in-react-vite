function SearchBar({ inputText , setInputText}) {
  return (
    <div>
      <input type="text" value={inputText} placeholder="Search..." onChange={(e) => {setInputText(e.target.value)}}/>
        <br />
        <input type='checkbox'/>
    </div>
  );
}
export default SearchBar;