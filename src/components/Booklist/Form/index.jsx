import { BookContext } from "contexts/bookcontext";
import React, { useContext, useEffect, useState } from "react";
import { ADD_BOOK, EDIT_BOOK } from "reducers/booklistReducer";
import { v4 as uuid } from "uuid";

const Form = () => {
  const { dispatch, editBookId, books, setEditBookId } =
    useContext(BookContext);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editBookId && books.length) {
      const { title: bookTitle } = books?.find(
        (book) => book?.id === editBookId
      );
      setTitle(bookTitle);
    }
  }, [editBookId, books]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editBookId) addBook();
    else editBook();

    setTitle("");
  };

  const addBook = () => {
    dispatch({
      type: ADD_BOOK,
      payload: {
        title,
        id: uuid(),
        status: false,
      },
    });
  };

  const editBook = () => {
    const updatedBooks = books?.map((book) => {
      if (book?.id === editBookId) {
        return {
          ...book,
          title,
        };
      }
      return book;
    });
    dispatch({
      type: EDIT_BOOK,
      payload: updatedBooks,
    });
    setEditBookId(null);
  };

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">{editBookId ? "Edit" : "Add"} Book</button>
      </form>
    </div>
  );
};

export default Form;
