import Router from './router'
import { AppProvider } from './provider/AppProvider'


const App = () => {
  return (
    <AppProvider>    
      <Router />
    </AppProvider>
  )
}

export default App