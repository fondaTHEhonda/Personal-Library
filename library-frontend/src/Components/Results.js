const Results = ({books, handleSelect}) => {
    if(books.length > 0) {
        return (
        <div id='results-container'>
            <h2>Results</h2>
            {books.map(index => {
                return (
                <div key={index.id}>
                    <img src={index.volumeInfo.imageLinks.smallThumbnail} alt='book-cover' key={index.etag}/>
                    <button onClick={handleSelect} key={index.id} id={index.id}>Select</button>
                </div>)}
            )}
        </div>
    )
} else {
    return (
        <div></div>
    )
}
}

export default Results