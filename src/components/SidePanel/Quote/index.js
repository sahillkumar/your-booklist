import React from "react";
import "./index.css";

const Quote = () => {
  return (
    <div>
      <div className="quoteWrapper">
        <blockquote cite="https://www.goodreads.com/quotes/tag/books">
          So many Books, {"\n"} So little time.
        </blockquote>
        <div className="writer">- Frank Zappa</div>
      </div>
    </div>
  );
};
export default Quote;
