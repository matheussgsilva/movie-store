import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'

const Router = () => {
    return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
    )
}

export default Router