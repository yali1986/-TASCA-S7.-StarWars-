import { GlobalProvider } from './context/GlobalState'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import List from './pages/List'
import StarshipDetailPage from './pages/StarshipDetailPage'
import Home from './pages/Home'



function App() {

  return (
    <GlobalProvider>

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/detail/:id"  element={<StarshipDetailPage />} />          
        </Routes>

      </BrowserRouter>

    </GlobalProvider>
  )
}

export default App
