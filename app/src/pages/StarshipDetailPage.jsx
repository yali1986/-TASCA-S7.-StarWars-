import { useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { Context } from "../context/GlobalState"
import StarshipDetail from "../components/StarshipDetail"
import { Navbar } from "../components/Navbar"


export default function StarshipDetailPage() {

  const { id } = useParams()
  const { data } = useContext(Context)

  if (!data || data.length === 0) {
    return <div>Cargando...</div>;
  }

  const starship = data.find(ship => ship.url.split("/")[5]=== id.toLowerCase())

  return (
    <div className="container-fluid text-center">

<Navbar links={[
  { path: "/", label: "Home" },
  { path: "/list", label: "Starships List" },

]} />

      

      <div className="text-center">
        {starship ? <StarshipDetail starship={starship} /> : <p className="mt-5">Nave no encontrada</p>}
      </div>
    </div>
  )
}
