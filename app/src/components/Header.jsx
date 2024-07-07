import { useContext } from 'react'
import { Context } from '../context/GlobalState'
import logoStarWars from "../assets/logoStarWars.png"


export default function Header() {
    const data = useContext(Context)

    return (
        <div className="text-center m-5 w-75 mx-auto" style={{ border: "none" }}>
            <img src={logoStarWars} alt="Star Wars Logo" className="logo"/>
        </div>
    )
}
