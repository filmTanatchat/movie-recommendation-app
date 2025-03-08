import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="container">
      <div className="row">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-center">No movies found. Try searching for another title.</p>
        )}
      </div>
    </div>
  );
}

export default MovieList;