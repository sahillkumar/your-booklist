import React, { createContext, useReducer, useEffect, useState } from "react";
import { bookReducer } from "reducers/booklistReducer";

export const BookContext = createContext();
const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const [editBookId, setEditBookId] = useState(null);

  const contextValues = {
    books,
    dispatch,
    editBookId,
    setEditBookId,
  };

  return (
    <BookContext.Provider value={contextValues}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
