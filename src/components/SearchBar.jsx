import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      console.log("User searched for:", query); // Debugging
      onSearch(query);
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap={2} sx={{ my: 3 }}>
      {/* Search Input Field */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{
          maxWidth: "400px",
          backgroundColor: "white",
          borderRadius: "8px",
          "& .MuiInputBase-input": {
            color: "black",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {/* Search Button */}
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;