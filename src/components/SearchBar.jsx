

const SearchBar = ({ onSearch }) => {
    const handleChange = (event) => {
        onSearch(event.target.value);
      };
    
      return (
        <div>
          <input type="text" placeholder="Search..." onChange={handleChange} />
        </div>
      );
    }
    
   

export default SearchBar; 

