import Router from './router'
import { AppProvider } from './provider/AppProvider'
import { CartProvider } from './provider/CartProvider'

const App = () => {
  return (
    <AppProvider> 
    <CartProvider>
      <Router />
    </CartProvider>  
    </AppProvider>
  )
}

export default App