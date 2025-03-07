import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search data..."
      />
    </div>
  );
}

export default SearchBar;