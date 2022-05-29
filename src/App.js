import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  console.log('App', searchValue)

  return (
    <Navbar 
      search={value => setSearchValue(value)}
      onFavScreen={() => console.log('open Fav screen')}
      onCartScreen={() => console.log('open Cart screen')}
    />
  )
}

export default App