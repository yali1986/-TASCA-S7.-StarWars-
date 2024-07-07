import PropTypes from 'prop-types'


const StarshipList = ({ starships }) => {
    return (
        <ul className='container-fluid'>
            {starships?.map( starship => (
                <li key={starship.name} className='card w-75 mx-auto ps-3 pb-0 pt-3 m-3 bg-dark bg-gradient text-secondary'>
                    <div className='my-auto'>
                        <h6>{starship.name.toUpperCase()}</h6>
                        <p>{starship.model}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

StarshipList.PropTypes = {
    starships: PropTypes.arrayOf(
       PropTypes.shape({
        name: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired
       }) 
    ).isRequired
}

export default StarshipList
