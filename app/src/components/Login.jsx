import { useState, useRef } from 'react';
import loginvector from "../assets/loginvector.jpeg";

import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);

export default function Login() {
  const [registrando, setRegistrando] = useState(false);

  // Referencias a los inputs
  const emailRef = useRef();
  const passwordRef = useRef();

  const functAuthentication = async (e) => {
    e.preventDefault();
    const correo = emailRef.current.value;
    const contrasenya = passwordRef.current.value;

    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth, correo, contrasenya);
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          alert("El email ya está en uso");
        } else {
          alert("Error al registrar usuario");
        }
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, contrasenya);
      } catch (error) {
        alert("Usuario o contraseña incorrectos");
      }
    }

    // Limpiar los inputs después de intentar registrarse o iniciar sesión
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }

  const toggleRegistering = () => {
    setRegistrando(!registrando);
    // Limpiar los inputs al cambiar entre registrar e iniciar sesión
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }

  return (
    <div>
      <h4>Este es el login</h4>

      <div className='container-fluid'>
        <div className='row'>

          <div className='col-md-4'>
            <div className='card card-body'>
              <form onSubmit={functAuthentication}>
                <input type="text" placeholder='Ingresar Email' ref={emailRef} id="email" />
                <input type="password" placeholder='Ingresar Contraseña' ref={passwordRef} id="password" />
                <button className='btnform'>{registrando ? "Regístrate" : "Inicia sesión"}</button>
              </form>

              <h4 className='text-danger'>
                {registrando ? "Ya estás registrado" : "No tienes cuenta aún"}
                <button onClick={toggleRegistering}>
                  {registrando ? "Inicia sesión" : "Regístrate"}
                </button>
              </h4>

            </div>
          </div>

          <div className='col-md-8'>
            <img src={loginvector} alt="Login image" className='img-fluid' />
          </div>

        </div>
      </div>
    </div>
  );
}