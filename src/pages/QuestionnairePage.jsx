import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import MovieList from "../components/MovieList";
import { fetchTrendingMovies } from "../services/movieService";

function QuestionnairePage() {
  const [genre, setGenre] = useState("Action");
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const handleSubmit = async () => {
    const movies = await fetchTrendingMovies();
    const filteredMovies = movies.filter((movie) =>
      movie.genre_ids.includes(getGenreId(genre))
    );
    setRecommendedMovies(filteredMovies.slice(0, 10)); // Show top 10
  };

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" fontWeight="bold">
        Movie Recommendation Questionnaire 🎥
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
        Choose your favorite genre to get movie recommendations!
      </Typography>
      
      <Select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        sx={{ width: "300px", mb: 2 }}
      >
        <MenuItem value="Action">Action</MenuItem>
        <MenuItem value="Comedy">Comedy</MenuItem>
        <MenuItem value="Drama">Drama</MenuItem>
        <MenuItem value="Horror">Horror</MenuItem>
      </Select>

      <Button variant="contained" sx={{ ml: 2 }} onClick={handleSubmit}>
        Get Recommendations
      </Button>

      <MovieList movies={recommendedMovies} />
    </Box>
  );
}

// Helper function to map genre names to TMDb genre IDs
function getGenreId(genre) {
  const genres = { "Action": 28, "Comedy": 35, "Drama": 18, "Horror": 27 };
  return genres[genre] || 28;
}

export default QuestionnairePage;