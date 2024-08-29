import { BookContext } from "contexts/bookcontext";
import React, { useContext } from "react";
import { ReactComponent as EditIcon } from "assets/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "assets/icons/delete.svg";
import { CHANGE_READ_STATUS, REMOVE_BOOK } from "reducers/booklistReducer";

const List = () => {
  const { books, dispatch, setEditBookId, editBookId } =
    useContext(BookContext);

  const removeBook = (bookId) => {
    const updatedBooks = books?.filter((book) => book?.id !== bookId);
    dispatch({ type: REMOVE_BOOK, payload: updatedBooks });
  };

  const changeReadStatus = (bookId, status) => {
    if (bookId === editBookId) {
      alert("Please edit your book first.");
      return;
    }

    const updatedBooks = books?.map((book) => {
      if (book?.id === bookId) {
        return {
          ...book,
          status,
        };
      }
      return book;
    });
    dispatch({
      type: CHANGE_READ_STATUS,
      payload: updatedBooks,
    });
  };

  return (
    <div className="list">
      <ul>
        {books.map((book) => (
          <ListItem
            key={book?.id}
            book={book}
            removeBook={removeBook}
            setEditBookId={setEditBookId}
            changeReadStatus={changeReadStatus}
          />
        ))}
      </ul>
    </div>
  );
};

const ListItem = ({ book, removeBook, changeReadStatus, setEditBookId }) => {
  const className = book?.status ? "bookCompleted" : "";
  return (
    <li key={book?.id} className={className}>
      <span>
        <input
          type="checkbox"
          name="status"
          id="status"
          onChange={(e) => changeReadStatus(book?.id, e?.target?.checked)}
          checked={book?.status}
          className="changeBookStatusInput"
        />
      </span>
      <span title={book?.title} className="title">
        {book?.title}
      </span>
      <button
        className="edit"
        onClick={() => setEditBookId(book?.id)}
        disabled={book?.status}
      >
        <EditIcon />
      </button>
      <button
        className="delete"
        onClick={() => removeBook(book?.id)}
        disabled={book?.status}
      >
        <DeleteIcon />
      </button>
    </li>
  );
};

export default List;
