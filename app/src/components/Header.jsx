import { useContext } from 'react'
import { Context } from '../context/GlobalState'
import logoStarWars from "../assets/logoStarWars.png"
import appFirebase from '../credenciales'
import {getAuth, signOut} from "firebase/auth"
const auth = getAuth(appFirebase)


export default function Header() {
    const data = useContext(Context)

    return (
        <div className='row'>
        <div className="m-5 w-75 mx-auto" style={{ border: "none" }}>
          <div className="d-flex justify-content-between align-items-center">
            <img src={logoStarWars} alt="Star Wars Logo" className="logo"/>
            <button className="btn btn-light" onClick={()=> signOut(auth)}>Logout</button>
          </div>
        </div>
      </div>
        
    )
}
