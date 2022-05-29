import { useState, BrowserRouter, Route, Routes } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  console.log(searchValue)

  return (
    <BrowserRouter>
      <Navbar 
        search={value => setSearchValue(value)}
        onFavScreen={() => console.log('open Fav screen')}
        onCartScreen={() => console.log('open Cart screen')}
      />
      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App