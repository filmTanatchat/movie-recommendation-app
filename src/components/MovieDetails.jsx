import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/movieService";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);
    }
    getMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>⭐ {movie.vote_average}</p>
    </div>
  );
}

export default MovieDetails;