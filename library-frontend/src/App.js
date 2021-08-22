import React, { useState } from 'react'
import axios from 'axios'
import Results from './Components/Results'

function App() {
  const [ books, setBooks ] = useState([])
  const [ search, setSearch ] = useState('')
  const [ selected, setSelected ] = useState('')

  const api_key = process.env.REACT_APP_API_KEY
  
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const results = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${api_key}&maxResults=25`)
    setBooks(results.data.items)
  }

  const handleSelect = (event) => {
    setSelected(event.target.id)
  }

  return (
    <div >
      <div id='header'>
        <h1>Personal Library</h1>
      </div>
      <div id='search-container'>
        <form id='book-search-form' onSubmit={handleSubmit}>
          <input type='text' onChange={handleSearch}></input>
          <button type='submit'>Search Books</button>
        </form>
      </div>
      <Results books={books} handleSelect={handleSelect} />
      <div id='user-library'>
        <h2>My Library</h2>
      </div>
    </div>
  );
}

export default App;
