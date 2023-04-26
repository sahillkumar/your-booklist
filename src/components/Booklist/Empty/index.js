import empty from "assets/images/empty.svg";
import "./index.css";
import React from "react";

const EmptyComponent = () => {
  return (
    <div className="empty">
      <div className="emptyImage">
        <img src={empty} alt="empty" height="100%" width="100%" />
      </div>
      <span>No books to read.</span>
      <p>
        Don't know what to read ?
        <a
          href="https://www.goodreads.com/shelf/show/to-read"
          target="_blank"
          rel="noreferrer"
        >
          click here
        </a>
      </p>
    </div>
  );
};

export default EmptyComponent;
