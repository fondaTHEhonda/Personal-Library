import React, { useState } from 'react'
import axios from 'axios'
import Results from './Components/Results'
import Header from './Components/Header'
import SearchForm from './Components/SearchForm'
import Library from './Components/Library'

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

    const singleBook = books.filter(book => {
      return book.id.includes(selected)
    })

    console.log(singleBook)
  }

  return (
    <div >
      <Header/>
      <SearchForm handleSearch={handleSearch} handleSubmit={handleSubmit} />
      <Results books={books} handleSelect={handleSelect} />
      <Library />
    </div>
  );
}

export default App;
