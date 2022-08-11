import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import FavoriteMovies from './pages/FavoriteMovies'
import Cart from './pages/Cart'
import SearchPage from './pages/SearchPage'
import Theme from './components/Theme'

const Router = () => {
    return (
    <BrowserRouter>
      <Theme>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<MovieDetail />} />
            <Route path='/favoritos' element={<FavoriteMovies />} />
            <Route path='/carrinho' element={<Cart />} />
            <Route path='/search/:id' element={<SearchPage />} />
        </Routes>
      </Theme>
    </BrowserRouter>
    )
}

export default Router