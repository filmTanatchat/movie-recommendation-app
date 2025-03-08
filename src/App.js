import React from "react";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App container">
      <h1 className="text-center mt-3">Movie Recommendation App 🎬</h1>
      <SearchBar />
      <MovieList />
    </div>
  );
}

export default App;