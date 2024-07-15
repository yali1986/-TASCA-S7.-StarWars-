import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logoStarWars from "../assets/logoStarWars.png"
import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const auth = getAuth(appFirebase)

export default function Login() {
  const [registrando, setRegistrando] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"

  const functAuthentication = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
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
        alert("Error al registrar usuario")
      } else {
        alert("Usuario o contraseña incorrectos")
      }
    }
  };

  return (
    <div>
      <div className='container-fluid'>
        <div className='row text-center'>
          <div className='text-center my-5'>
            <img src={logoStarWars} alt="Login image" className='img-fluid' />
          </div>

          <div className='col-md-4 mx-auto'>
            <div className='card card-body'>
              <form onSubmit={functAuthentication}>
                <input type="text" placeholder='Ingresar Email' id="email" className='row' />
                <input type="password" placeholder='Ingresar Contraseña' id="password" className='row' />
                <button className='btnform'>{registrando ? "Regístrate" : "Inicia sesión"}</button>
              </form>

              <h4 className='text-danger'>{registrando ? "Ya estás registrado" : "No tienes cuenta aún"}<button onClick={() => setRegistrando(!registrando)}>{registrando ? "Inicia sesión" : "Regístrate"}</button></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
