import empty from "assets/icons/empty.svg";
import React from "react";

const EmptyComponent = () => {
  return (
    <div className="empty">
      <div className="emptyImage">
        <img src={empty} alt="empty" height="100%" width="100%" />
      </div>
      <div style={{ textAlign: "center" }}>
        No books on your reading list yet! <br />
        Don't know what to read ? <br />
        <a
          href="https://www.goodreads.com/shelf/show/to-read"
          target="_blank"
          rel="noreferrer"
        >
          let me help you
        </a>
      </div>
    </div>
  );
};

export default EmptyComponent;
