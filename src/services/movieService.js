const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchTrendingMovies() {
  const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

export async function searchMovies(query) {
  console.log("Searching movies for query:", query);
  console.log("Using API Key:", API_KEY); // Debugging API Key

  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  if (!response.ok) {
    console.error("Error fetching search results:", response.statusText);
    return [];
  }
  
  const data = await response.json();
  console.log("Search Results:", data.results); // Debugging
  return data.results;
}

export async function fetchMovieDetails(movieId) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`);
  
  if (!response.ok) {
    console.error("Failed to fetch movie details:", response.statusText);
    return null;
  }

  const data = await response.json();
  console.log("Movie Details Data:", data); // Debugging
  return data;
}