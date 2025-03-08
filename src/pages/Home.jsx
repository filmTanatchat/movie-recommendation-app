import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { fetchTrendingMovies, searchMovies } from "../services/movieService";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const moviesData = await fetchTrendingMovies();
      console.log("Trending Movies Loaded:", moviesData); // Debugging
      setMovies(moviesData);
    }
    getMovies();
  }, []);

  const handleSearch = async (query) => {
    console.log("User searched for:", query); // Debugging
    const searchResults = await searchMovies(query);
    console.log("Updating state with search results:", searchResults); // Debugging
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