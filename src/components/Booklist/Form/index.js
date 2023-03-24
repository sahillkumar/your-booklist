import { BookContext } from "contexts/bookcontext";
import React, { useContext, useState } from "react";
import "./index.css";

const Form = () => {
  const { dispatch } = useContext(BookContext);
  const [title, settitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
      },
    });
    settitle("");
  };

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
