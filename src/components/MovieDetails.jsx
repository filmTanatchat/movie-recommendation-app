import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/movieService";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);
    }
    getMovie();
  }, [id]);

  if (!movie) return <CircularProgress color="secondary" sx={{ display: "block", margin: "auto", mt: 5 }} />;

  return (
    <Box 
      sx={{
        textAlign: "center",
        color: "white",
        padding: "40px",
        background: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,1)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h3" fontWeight="bold">{movie.title}</Typography>
      <Typography variant="h6" sx={{ mt: 2, mb: 3 }}>{movie.overview}</Typography>
      <Typography variant="h5">⭐ {movie.vote_average}/10</Typography>
      <Button 
        variant="contained" 
        sx={{ mt: 3 }}
        onClick={() => window.history.back()}
      >
        Go Back
      </Button>
    </Box>
  );
}

export default MovieDetails;