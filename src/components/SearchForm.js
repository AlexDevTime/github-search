import React from "react";

const SearchForm = ({ handleSubmit, handleChange, searchInput }) => {

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        name="searchRepos"
        autoComplete="off"
        placeholder="Enter a repository name..."
        value={searchInput}
        onChange={handleChange} />
      <button>Search</button>
    </form>
  )
}

export default SearchForm;