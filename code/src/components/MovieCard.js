import React from 'react'
import { Link } from 'react-router-dom'

export const MovieCard = (props) => {
  return (
    <Link to={`/movies/${props.id}`}>
      <div className="movie-card">
        <div className="movie-card-overlay">
          <h2>{props.title}</h2>
          <div className="row movie-card-extra-info">
            <p className="movie-card-subtitle">{props.release_date}</p>
            <div className="rating-tag">
              <span className="movie-card-rating">{props.vote_average}<span className="subtle">/10</span></span>
            </div>
          </div>
        </div>
        <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt={props.title} />
      </div>
    </Link>
  )
}
