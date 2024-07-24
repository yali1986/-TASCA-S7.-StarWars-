import { Navbar } from "../components/Navbar"
import logoStarWars from "../assets/logoStarWars.png"


export default function Home({correoUsuario}) {
  return (
<>


<div className='row text-center'>
<div className='text-center my-5'>
  <img src={logoStarWars } alt="Login image" className='img-fluid' />        
</div> 
</div>


    <div className="fs-5">
     <p className="text-center m-5">Welcome {correoUsuario} to the page where you can revisit the startships</p>



    <Navbar links={[
  { path: "/list", label: "Starships List" },
]} />    
     
    </div>
    </>
  )
}
