import React, { useState } from "react";
import { fetchTrendingMovies } from "../services/movieService";

function Questionnaire({ onRecommend }) {
  const [genre, setGenre] = useState("Action");

  const handleSubmit = async () => {
    const movies = await fetchTrendingMovies();
    const filteredMovies = movies.filter(movie => movie.genre_ids.includes(getGenreId(genre)));
    onRecommend(filteredMovies.slice(0, 10));
  };

  return (
    <div className="container">
      <h2>Movie Recommendation Questionnaire</h2>
      <select className="form-control" onChange={(e) => setGenre(e.target.value)}>
        <option>Action</option>
        <option>Comedy</option>
        <option>Drama</option>
        <option>Horror</option>
      </select>
      <button className="btn btn-primary mt-2" onClick={handleSubmit}>Get Recommendations</button>
    </div>
  );
}

function getGenreId(genre) {
  const genres = { "Action": 28, "Comedy": 35, "Drama": 18, "Horror": 27 };
  return genres[genre] || 28;
}

export default Questionnaire;