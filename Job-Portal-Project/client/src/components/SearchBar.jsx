import React from "react";

function SearchBar({ onSearch, onFilter }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search by title or company"
        onChange={(e) => onSearch(e.target.value)}
      />

      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">All Types</option>
        <option value="Full-Time">Full-Time </option>
        <option value="Remote">Remote</option>
        <option value="Part-Time">Part-Time</option>
      </select>
    </div>
  );
}

export default SearchBar;
