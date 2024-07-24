import logoStarWars from "../assets/logoStarWars.png"
import appFirebase from '../credenciales'
import {getAuth, signOut} from "firebase/auth"
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const auth = getAuth(appFirebase)


export default function Header() {
  const { usuario } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
      await signOut(auth)
      navigate('/')
  }

  return (
      <div className='row'>
          <div className="m-5 w-75 mx-auto" style={{ border: "none" }}>
              <div className="d-flex justify-content-between align-items-center">
                  <img src={logoStarWars} alt="Star Wars Logo" className="logo" style={{ transform: 'scale(0.8)' }}/>
                  {usuario ? (
                      <button className="btn btn-light" onClick={handleLogout}>Logout</button>
                  ) : (
                      <button className="btn btn-light" onClick={() => navigate('/login')}>Login</button>
                  )}
              </div>
          </div>
      </div>
  )
}
