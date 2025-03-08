import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/movieService";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const moviesData = await fetchTrendingMovies();
      console.log("Movies Loaded:", moviesData);
      if (moviesData) setMovies(moviesData);
    }
    getMovies();
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Trending Movies</h2>
      <div className="row">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-center">❌ No movies found. Check API Key.</p>
        )}
      </div>
    </div>
  );
}

export default MovieList;