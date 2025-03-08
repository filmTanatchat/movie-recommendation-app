import React, { useEffect, useState } from "react";
import { fetchTrendingMovies, searchMovies } from "../services/movieService";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const moviesData = await fetchTrendingMovies();
      setMovies(moviesData);
    }
    getMovies();
  }, []);

  const handleSearch = async (query) => {
    const searchResults = await searchMovies(query);
    setMovies(searchResults);
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <div className="row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;