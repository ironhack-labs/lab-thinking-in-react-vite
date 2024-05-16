const SearchBar = () => {
    return (
        <div>
            <h2>Search</h2>
            <form action="/search">
                <input type="text" />
            </form>
            <form action="/tick">
                <input type="checkbox" name="in-stock"/>
                <label htmlFor="in-stock"> Only show products in stock </label>
            </form>

        </div>

    )
}

export default SearchBar