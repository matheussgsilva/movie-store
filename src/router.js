import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import FavoriteMovies from './pages/FavoriteMovies'

const Router = () => {
    return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<MovieDetail />} />
          <Route path='/favoritos' element={<FavoriteMovies />} />
      </Routes>
    </BrowserRouter>
    )
}

export default Router