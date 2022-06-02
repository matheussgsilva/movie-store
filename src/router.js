import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const Router = ({ movies }) => {
    return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home movies={movies} />} />
      </Routes>
    </BrowserRouter>
    )
}

export default Router