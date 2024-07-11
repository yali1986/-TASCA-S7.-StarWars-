import React from "react"

export default function Films({ films }) {
  if (films.length === 0) {
    return <p>No hay películas disponibles para esta nave.</p>
  }

  return (
    <div className="container-fluid mt-5">
      <h3 className=" text-start text-uppercase fs-5 bor">Films</h3>
      <div className="row">
        {films.map(film => (
          <div key={film.url} className="col-3 col-md-2 mb-3">
          <div className="card mt-3 bg-dark">
            <img src={`https://starwars-visualguide.com/assets/img/films/${film.url.split("/")[5]}.jpg`} alt={film.title} className="card-img-top"/>   
            <div className="card-body d-flex align-items-center">        
              <h5 className="card-title text-secondary fs-6">{film.title}</h5>             
              </div> 
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}