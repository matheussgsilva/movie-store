import { useState } from 'react'
import Navbar from './components/Navbar'
import Router from './router'


const App = () => {
  const [searchValue, setSearchValue] = useState('')
  console.log(searchValue)  

  return (
    <>
    <Navbar 
        search={value => setSearchValue(value)}
        onCartScreen={() => console.log('open Cart screen')}       
      />
    <Router />
    </>
  )
}

export default App