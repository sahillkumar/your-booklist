import { BookContext } from "contexts/bookcontext";
import React, { useContext } from "react";

const List = () => {
  const { books, dispatch } = useContext(BookContext);
  return (
    <div className="list">
      <ul>
        {books.map((book) => (
          <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book?.id })}>
            <span title={book?.title} className="title">
              {book?.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
