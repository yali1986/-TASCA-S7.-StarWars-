import PropTypes from "prop-types"
import { useState } from "react"


const StarshipDetail = ({ starship }) => {

  const [imageLoaded, setImageLoaded] = useState(true)

  const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${starship.url.split("/")[5]}.jpg`

  const handleImageError = () => {
    setImageLoaded(false)
  }

  return (
    <div className="container-fluid d-flex justify-content-center">

      <div className="row w-75 d-flex justify-content-center">

      {imageLoaded && (
        <div className="col-12 col-md-6 my-auto p-3">
          <img 
          src={imageUrl} 
          alt={starship.name} 
          className="img-fluid w-100" 
          onError={handleImageError}/>
        </div>
      )}

      {!imageLoaded && (
        <div className="col-12 col-md-6 my-auto">          
        </div>
      )} 

        <div className="card bg-dark bg-gradient text-secondary text-start col-12 col-md-6 my-2 p-3">
          <h2 className="fs-5 mb-4 my-auto">{starship.name.toUpperCase()}</h2>

          <div className="row my-auto">
            <div className="col-12 col-lg-6">
              <p><strong>Model:</strong> {starship.model}</p>
              <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
              <p><strong>Cost in Credits:</strong> {starship.cost_in_credits}</p>
              <p><strong>Cargo Capacity:</strong> {starship.cargo_capacity}</p>
            </div>

            <div className="col-12 col-lg-6 pt-4 ps-5">
              <p><strong>Length:</strong> {starship.length}</p>
              <p><strong>Crew:</strong> {starship.crew}</p>
              <p><strong>Passengers:</strong>{starship.passengers}</p>
              <p><strong>Starship Class:</strong> {starship.starship_class}</p>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

StarshipDetail.propTypes = {
  starship: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    cost_in_credits: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    crew: PropTypes.string.isRequired,
    passengers: PropTypes.string.isRequired,     
    starship_class: PropTypes.string.isRequired,
  }).isRequired,
}

export default StarshipDetail
