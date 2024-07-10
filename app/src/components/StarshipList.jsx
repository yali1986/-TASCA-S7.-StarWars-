import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './Navbar'

const StarshipList = ({ starships, loadMore, loading }) => {
  useEffect(() => {
    const handleScroll = () => {
      // Verifica si el usuario ha llegado al fondo de la página
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1 && !loading) {
        loadMore()
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore, loading])

  return (
    <ul className='container-fluid text-center'>
    
    <Navbar links={[
  { path: "/", label: "Home" },
]} />

      {starships?.map(starship => (
        <li key={starship.url} className='card w-75 mx-auto ps-3 pb-0 pt-3 m-3 bg-dark bg-gradient text-secondary'>
          <Link to={`/detail/${starship.url.split('/')[5]}`} className='text-decoration-none text-light'>
            <div className='my-auto text-start'>
              <h6>{starship.name.toUpperCase()}</h6>
              <p>{starship.model}</p>
            </div>
          </Link>
        </li>
      ))}
      {loading && <p>Loading more starships...</p>}
    </ul>
  )
}

StarshipList.propTypes = {
  starships: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  loadMore: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default StarshipList
