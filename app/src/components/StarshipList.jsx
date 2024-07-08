import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const StarshipList = ({ starships }) => {
    return (
        <ul className='container-fluid text-center'>
        <nav className="navbar bg-dark border-bottom border-body px-5 mx-5" data-bs-theme="dark">
      <div className="container-fluid justify-content-center">
        <Link to="/" className="navbar-brand text-light">Home</Link>
      </div>
    </nav>

        
            {starships?.map( starship => (
                <li key={starship.name} className='card w-75 mx-auto ps-3 pb-0 pt-3 m-3 bg-dark bg-gradient text-secondary'>
                <Link to={`/starship/${starship.name.toLowerCase()}`} className='text-decoration-none text-light'>
                    <div className='my-auto text-start'>
                        <h6>{starship.name.toUpperCase()}</h6>
                        <p>{starship.model}</p>
                    </div>
                    </Link>
                    
                </li>
            ))}
        </ul>
    )
}

StarshipList.propTypes = {
    starships: PropTypes.arrayOf(
       PropTypes.shape({
        name: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired
       }) 
    ).isRequired
}

export default StarshipList
