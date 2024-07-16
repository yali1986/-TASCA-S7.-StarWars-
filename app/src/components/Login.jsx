import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logoStarWars from "../assets/logoStarWars.png"
import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const auth = getAuth(appFirebase)

export default function Login() {
  const [registrando, setRegistrando] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const functAuthentication = async (e) => {
    e.preventDefault()
    const correo = e.target.email.value
    const contrasenya = e.target.password.value

    try {
      if (registrando) {
        await createUserWithEmailAndPassword(auth, correo, contrasenya)
      } else {
        await signInWithEmailAndPassword(auth, correo, contrasenya)
      }
      navigate(from, { replace: true })
    } catch (error) {
      if (registrando) {
        alert("Error registering user")
      } else {
        alert("Incorrect username or password")
      }
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col-md-6 offset-md-3 text-center">
          <img src={logoStarWars} alt="Login image" className='img-fluid mb-4' style={{ maxWidth: '200px' }} />
          <div className='card card-body shadow-lg p-4'>
            <h2 className='mb-4'>{registrando ? "Regístrate" : "Inicia sesión"}</h2>
            <form onSubmit={functAuthentication}>
              <div className="mb-3">
                <input type="email" placeholder='Introduce tu Email' id="email" className='form-control' required />
              </div>
              <div className="mb-3">
                <input type="password" placeholder='Introduce tu contraseña' id="password" className='form-control' required />
              </div>
              <button className='btn btn-primary w-100 mt-3'>{registrando ? "Regístrate" : "Inicia sesión"}</button>
            </form>
            <div className='mt-4 bg-dark'>
              <h6 className='d-inline'>{registrando ? "¿Ya tienes una cuenta? " : "¿No tienes cuenta? "}</h6>
              <button className='btn btn-link' onClick={() => setRegistrando(!registrando)}>
                {registrando ? "Inicia sesión" : "Regístrate"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
