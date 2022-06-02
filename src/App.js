import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Router from './router'
import tmdb from './lib/tmdb'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [movies, setMovies] = useState([])

  console.log(searchValue)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${tmdb}&language=en-US&page=1`)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  }, [])

  

  return (
    <>
    <Navbar 
        search={value => setSearchValue(value)}
        onFavScreen={() => console.log('open Fav screen')}
        onCartScreen={() => console.log('open Cart screen')}
      />
    <Router movies={movies} />
    </>
  )
}

export default App