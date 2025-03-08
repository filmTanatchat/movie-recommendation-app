import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { fetchTrendingMovies, searchMovies } from "../services/movieService";

function Home() {
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
      <h1 className="text-center my-3">Movie Recommendation App 🎬</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;