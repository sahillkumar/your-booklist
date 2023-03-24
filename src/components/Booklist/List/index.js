import { BookContext } from "contexts/bookcontext";
import React, { useContext } from "react";
import "./index.css";
import empty from "assets/images/empty.svg";

const ListItem = ({ book: { title, id } }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", id })}>
      <span title={title} className="title">
        {title}
      </span>
    </li>
  );
};

const List = () => {
  const { books } = useContext(BookContext);
  return (
    <>
      <div className="header">
        <div>Your Pending Books</div>
      </div>
      <hr />
      <div className="listWrapper">
        {books.length ? (
          <div className="list">
            <ul>
              {books.map((book) => (
                <ListItem book={book} key={book.id} />
              ))}
            </ul>
          </div>
        ) : (
          <div className="empty">
            <div className="emptyImage">
              <img src={empty} alt="empty" height="100%" width="100%" />
            </div>
            <span>No books to read.</span>
          </div>
        )}
      </div>
    </>
  );
};

export default List;
