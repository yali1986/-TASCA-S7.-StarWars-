import { useState } from 'react'
import loginvector from "../assets/loginvector.jpeg"


import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
const auth = getAuth(appFirebase)


export default function Login() {

  const [registrando, setRegistrando] = useState(false)

  const functAuthentication = async (e) => {
    e.preventDefault()
    const correo = e.target.email.value
    const contrasenya = e.target.password.value
    if (registrando) {

      await createUserWithEmailAndPassword(auth, correo, contrasenya)

    } else {

      try {
        await signInWithEmailAndPassword(auth, correo, contrasenya)

      } catch (error) {
        alert("Usuario o contraseña incorrectos")
      }
    }

  }

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>


          <div className='col-md-4'>
            <div className='card card-body'>
              <form onSubmit={functAuthentication}>
                <input type="text" placeholder='Ingresar Email' id="email" />
                <input type="password" placeholder='Ingresar Contraseña' id="password" />
                <button className='btnform'>{registrando ? "Regístrate" : "Inicia sesión"}</button>
              </form>


              <h4 className='text-danger'>{registrando ? "Ya estás registrado" : "No tienes cuenta aún"}<button onClick={() => setRegistrando(!registrando)}>{registrando ? "Inicia sesión" : "Regístrate"}</button> </h4>


            </div>
          </div>



          <div className='col-md-8'>
            <img src={loginvector} alt="Login image" className='img-fluid' />
          </div>

        </div>


      </div>
    </div>
  )
}
