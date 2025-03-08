import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;