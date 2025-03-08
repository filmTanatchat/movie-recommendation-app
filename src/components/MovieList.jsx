import React, { useEffect, useState } from "react";
import { fetchTrendingMovies, searchMovies } from "../services/movieService";
import MovieCard from "./MovieCard";

const handleSearch = async (query) => {
  const searchResults = await searchMovies(query);
  setMovies(searchResults);
};

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