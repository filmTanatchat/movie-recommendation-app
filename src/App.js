import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;