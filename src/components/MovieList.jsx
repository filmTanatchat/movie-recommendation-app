import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/movieService";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const moviesData = await fetchTrendingMovies();
      setMovies(moviesData);
    }
    getMovies();
  }, []);

  return (
    <div className="container">
      <h2>Trending Movies</h2>
      <div className="row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;