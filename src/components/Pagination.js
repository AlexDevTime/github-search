import React from "react";

const Pagination = ({ pagesAmount, currentPage, setCurrentPage }) => {

  let paginationList = [];

  for (let i = 1; i <= pagesAmount; i++) {
    paginationList.push(i);
  }

  return (
    <div className="pagination">
      <ul>
        {paginationList.map(el => (
          <li key={el}>
            <button
              className={`paginationButton${el === currentPage ? " current-page" : ""}`}
              onClick={() => setCurrentPage(el)}>
              {el}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination;