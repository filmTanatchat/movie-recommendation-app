import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import NavBar from "./components/NavBar"; // Ensure NavBar exists
import Home from "./pages/Home";
import QuestionnairePage from "./pages/QuestionnairePage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#f48fb1" },
    background: { default: "#121212", paper: "#1d1d1d" },
    text: { primary: "#ffffff" },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <NavBar /> {/* Navigation Bar */}
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/questionnaire" element={<QuestionnairePage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;