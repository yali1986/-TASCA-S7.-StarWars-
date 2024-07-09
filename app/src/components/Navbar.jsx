import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export const Navbar = ({ links }) =>  {
  return (    
      <nav className="navbar bg-dark border-bottom border-body px-5 mx-5 mb-3" data-bs-theme="dark">
      <div className="container-fluid justify-content-center">

        {links.map((link, index) => (
            <Link key={index} to={link.path} className="navbar-brand text-light ms-5">
             {link.label}
            </Link>
        ))} 
        </div>
    </nav>
   
  )
} 

Navbar.propTypes = {
    links: PropTypes.arrayOf(
       PropTypes.shape({
        path: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
       }) 
    ).isRequired
}
