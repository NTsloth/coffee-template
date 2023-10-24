import React from "react";

const SearchForm = ({ active }) => (
  <div className={`search-form ${active ? "active" : ""}`}>
    <input type="search" id="search-box" placeholder="search here..." />
    <label htmlFor="search-box" className="fas fa-search"></label>
  </div>
);

export default SearchForm;
