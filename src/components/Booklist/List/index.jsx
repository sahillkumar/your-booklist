import { BookContext } from "contexts/bookcontext";
import React, { useContext, useState } from "react";
import { ReactComponent as EditIcon } from "assets/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "assets/icons/delete.svg";
import { ReactComponent as DragIcon } from "assets/icons/drag.svg";
import {
  CHANGE_BOOKS_ORDER,
  CHANGE_READ_STATUS,
  REMOVE_BOOK,
} from "reducers/booklistReducer";

const List = () => {
  const [draggedIndex, setDraggedIndex] = useState(null);
  const { books, dispatch, setEditBookId, editBookId } =
    useContext(BookContext);

  const removeBook = (bookId) => {
    if (bookId === editBookId) {
      alert("Please edit your book first.");
      return;
    }
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

  const onDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const onDrop = (e, targetIndex) => {
    e.preventDefault();
    const newBooks = books.slice();
    const [movedItem] = newBooks.splice(draggedIndex, 1);
    newBooks.splice(targetIndex, 0, movedItem);
    dispatch({
      type: CHANGE_BOOKS_ORDER,
      payload: newBooks,
    });
    setDraggedIndex(null);
  };

  return (
    <div className="list">
      <ul>
        {books.map((book, index) => (
          <ListItem
            key={book?.id}
            book={book}
            removeBook={removeBook}
            setEditBookId={setEditBookId}
            changeReadStatus={changeReadStatus}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

const ListItem = ({
  book,
  removeBook,
  changeReadStatus,
  setEditBookId,
  onDragOver,
  onDragStart,
  onDrop,
  index,
}) => {
  const className = book?.status ? "bookCompleted" : "";
  return (
    <li
      key={book?.id}
      className={className}
      draggable
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, index)}
      onDragStart={(e) => onDragStart(e, index)}
    >
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
      <button className="drag">
        <DragIcon />
      </button>
    </li>
  );
};

export default List;
