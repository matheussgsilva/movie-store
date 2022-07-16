import Router from './router'
import { AppProvider } from './provider/AppProvider'
import { CartProvider } from './provider/CartProvider'
import { PriceProvider } from './provider/PriceProvider'

const App = () => {
  return (
    <AppProvider> 
    <CartProvider>
    <PriceProvider>
      <Router />
    </PriceProvider>
    </CartProvider>  
    </AppProvider>
  )
}

export default App