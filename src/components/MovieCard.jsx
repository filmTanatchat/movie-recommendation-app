import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">⭐ {movie.vote_average}/10</p>
          <Link to={`/movie/${movie.id}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;