const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchTrendingMovies() {
  console.log("Fetching movies from API..."); // Debugging

  try {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    const data = await response.json();
    console.log("Fetched Data:", data); // ดูว่ามีข้อมูลจริงหรือไม่
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}