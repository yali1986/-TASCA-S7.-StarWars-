import { GlobalProvider } from './context/GlobalState'
import './App.css'
import Header from './components/Header'
import List from './pages/List'


function App() {

  return (
    <GlobalProvider>

      <Header />
      <List />

    </GlobalProvider>

  )
}

export default App
