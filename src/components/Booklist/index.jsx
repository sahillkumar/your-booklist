import Form from "components/Booklist/Form";
import List from "components/Booklist/List";
import React, { useContext } from "react";
import "./index.css";
import { BookContext } from "contexts/bookcontext";
import EmptyComponent from "components/Booklist/Empty";

const Booklist = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="booklist">
      <h1 className="header">Your Pending Books</h1>
      {books?.length ? <List /> : <EmptyComponent />}
      <Form />
    </div>
  );
};
export default Booklist;
