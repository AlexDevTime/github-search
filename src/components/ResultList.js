import React from "react";
import link from "../images/link.png";
import eye from "../images/eye.png";

const ResultList = ({ reposSlice }) => {

  return (
    <div className="result-list">
      <ul>
        {reposSlice?.map(item =>
          <li key={item.id}>
            <a
              href={item.html_url}
              target="_blank"
              rel="noopener noreferrer">
              <img src={link} alt="link" width="16" height="16" />
              {item.full_name}
            </a>
            <div className="description">{item.description}</div>
            <div className="infobar">
              <div>Owner: <span>{item.owner.login}</span></div>
              <div className="watchers">
                <span>{item.watchers}</span>
              </div>
            </div>  
          </li>)}
      </ul>
    </div>
  )
}

export default ResultList;