import { useContext, useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { Context } from "../context/GlobalState"
import StarshipDetail from "../components/StarshipDetail"
import { Navbar } from "../components/Navbar"
import Pilots from "../components/Pilots"
import Films from "../components/Films"




export default function StarshipDetailPage() {
  const { id } = useParams()
  const { data } = useContext(Context)
  const [starship, setStarship] = useState(null)
  const [pilots, setPilots] = useState([])
  const [films, setFilms] = useState([])

  useEffect(() => {
    if (data.length > 0) {
      const foundStarship = data.find(ship => ship.url.split("/")[5] === id.toLowerCase())
      if (foundStarship) {
        setStarship(foundStarship)
        
        
        const fetchPilots = async () => {
          const pilotData = await Promise.all(
            foundStarship.pilots.map(async (url) => {
              const res = await fetch(url)
              return res.json()
            })
          )
          setPilots(pilotData)
        }
        
    
        const fetchFilms = async () => {
          const filmData = await Promise.all(
            foundStarship.films.map(async (url) => {
              const res = await fetch(url)
              return res.json()
            })
          )
          setFilms(filmData)
        }

        fetchPilots()
        fetchFilms()
      }
    }
  }, [data, id])

  if (!data || data.length === 0) {
    return <div>Cargando...</div>
  }

  return (
    <div className="container-fluid text-center">
      <Navbar links={[
        { path: "/", label: "Home" },
        { path: "/list", label: "Starships List" },
      ]} />

      <div className="text-center">
        {starship ? <StarshipDetail starship={starship} /> : <p className="mt-5">Nave no encontrada</p>}
      </div>

      {starship && (
        <>
          <Pilots pilots={pilots} />
          <Films films={films} />
        </>
      )}
    </div>
  )
}
