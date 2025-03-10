import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function truncateTitle(title, maxLength) {
  return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
}

function MovieCard({ movie }) {
  return (
    <Card 
      sx={{
        maxWidth: 300, 
        margin: "20px auto", 
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        transition: "0.3s",
        padding: "12px",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 6px 15px rgba(0,0,0,0.4)"
        }
      }}
    >
      <CardMedia 
        component="img"
        height="400"
        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        sx={{ borderRadius: "8px", objectFit: "cover" }}
      />
      <CardContent sx={{ textAlign: "center", height: "70px", overflow: "hidden", padding: "12px 8px" }}>
        <Typography variant="h6" fontWeight="bold">
          {truncateTitle(movie.title, 20)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ⭐ {movie.vote_average}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "8px" }}> {/* Equal spacing */}
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", width: "100%" }}>
          <Button variant="contained" color="primary" fullWidth>View Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default MovieCard;