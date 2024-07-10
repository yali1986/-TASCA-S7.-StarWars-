import { Navbar } from "../components/Navbar"



export default function Home({correoUsuario}) {
  return (
    <div className="fs-5">
     <p className="text-center m-5">Welcome {correoUsuario} to the page where you can revisit the Star Wars startships</p>



    <Navbar links={[
  { path: "/list", label: "Starships List" },
]} />    
     
    </div>
  )
}
