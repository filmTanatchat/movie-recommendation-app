import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;