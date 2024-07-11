import { BrowserRouter, Route, Routes } from 'react-router-dom'
import appFirebase from './credenciales'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import './App.css'
import Header from './components/Header'
import List from './pages/List'
import StarshipDetailPage from './pages/StarshipDetailPage'
import Home from './pages/Home'
import Login from './components/Login'
import { GlobalProvider } from './context/GlobalState'
import { useState, useEffect } from 'react'
// import PrivateRoute from "./components/PrivateRoute"



const auth = getAuth(appFirebase)

function App() {
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {

      if (usuarioFirebase) {
        setUsuario(usuarioFirebase)
      } else {
        setUsuario(null)
      }
    })
    
    return () => unsubscribe()
  }, [])

  return (
    <GlobalProvider>
      <BrowserRouter>      
      {/* <PrivateRoute></PrivateRoute> */}
        {usuario ? (
          <>        
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/list" element={<List />} />           
              <Route path="/detail/:id" element={<StarshipDetailPage />} />
            </Routes>
          </>
        ) : (
          <Login />
        )}
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App