import { BookContext } from "contexts/bookcontext";
import React, { useContext } from "react";
import { ReactComponent as EditIcon } from "assets/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "assets/icons/delete.svg";
import { ReactComponent as DragIcon } from "assets/icons/drag.svg";

const List = () => {
  const { books, dispatch } = useContext(BookContext);

  const removeBook = (bookId) => {
    dispatch({ type: "REMOVE_BOOK", id: bookId });
  };

  return (
    <div className="list">
      <ul>
        {books.map((book) => (
          <li onClick={() => removeBook(book?.id)}>
            <span className="drag">
              <DragIcon />
            </span>
            <span title={book?.title} className="title">
              {book?.title}
            </span>
            <span className="edit">
              <EditIcon />
            </span>
            <span className="delete">
              <DeleteIcon />
            </span>
            <span>
              <input type="checkbox" name="status" id="status" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
