import React, { useState } from "react";
import axios from "axios";
import ResultList from "./components/ResultList";
import SearchForm from "./components/SearchForm";
import Pagination from "./components/Pagination";
import preloader from "./images/preloader.png"
import logo from "./images/GitHub-Logo-64px.png";

const PER_PAGE = 6;

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (searchInput === "") return;
    setLoading(true);

    await axios(
      `https://api.github.com/search/repositories?q=${searchInput.trim()}&per_page=30&page=1`
    ).then(res => {
      setLoading(false);
      setCurrentPage(1);
      setRepos(res.data.items);
    }).catch(err => {
      setLoading(false);
      alert(err);
    });
  }

  return (
    <>
      <div className="header">
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="logo" width="64" height="64" />
          </div>

          <SearchForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            searchInput={searchInput}
          />
        </div>
      </div>

      {loading &&
        <div className="preloader">
          <img src={preloader} alt="" width="" height="" />
        </div>
      }

      {repos &&
        repos.length === 0 ?
        <div className="message">We couldn't find any repositories</div>
        : <div className="results">
          <ResultList
            reposSlice={repos?.slice(currentPage * PER_PAGE - PER_PAGE, currentPage * PER_PAGE)}
          />

          {repos?.length > PER_PAGE &&
            <Pagination
              pagesAmount={Math.ceil(repos?.length / PER_PAGE)}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />}
        </div>
      }
    </>
  );
}

export default App;