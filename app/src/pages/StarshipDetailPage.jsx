import { useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { Context } from "../context/GlobalState"
import StarshipDetail from "../components/StarshipDetail"


export default function StarshipDetailPage() {

  const { id } = useParams()
  const { data } = useContext(Context)

  if (!data || data.length === 0) {
    return <div>Cargando...</div>;
  }

  const starship = data.find(ship => ship.url.split("/")[5]=== id.toLowerCase())

  return (
    <div className="container-fluid text-center">

<nav className="navbar bg-dark border-bottom border-body px-5 mx-5 mb-3" data-bs-theme="dark">
      <div className="container-fluid justify-content-center">
        <Link to="/" className="navbar-brand text-light">Home</Link>
        <Link to="/list" className="navbar-brand text-light ms-5">Starships List</Link>
      </div>
    </nav>
     
      

      <div className="text-center">
        {starship ? <StarshipDetail starship={starship} /> : <p className="mt-5">Nave no encontrada</p>}
      </div>
    </div>
  )
}
