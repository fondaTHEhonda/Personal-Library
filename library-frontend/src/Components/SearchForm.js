const SearchForm = ({ handleSubmit, handleSearch }) => {
    return (
        <div id='search-container'>
            <form id='book-search-form' onSubmit={handleSubmit}>
            <input type='text' onChange={handleSearch}></input>
            <button type='submit'>Search Books</button>
            </form>
        </div>
    )
}

export default SearchForm