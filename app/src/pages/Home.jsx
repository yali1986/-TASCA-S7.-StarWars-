import { Link } from "react-router-dom"
import List from "./List"


export default function Home() {
  return (
    <div className="fs-5">
     <p className="text-center mt-5">Home Page</p>
    <Link to="/List">
    <div className="row">
   <button className="btn btn-primary col-auto mx-auto fs-5 mt-5">Starship List</button>
   </div>
    </Link>
     
     
    </div>
  )
}
