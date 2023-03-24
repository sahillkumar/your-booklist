import Form from "components/Booklist/Form";
import List from "components/Booklist/List";
import React from "react";
import "./index.css";

const Booklist = () => {
  return (
    <div className="booklist">
      <List />
      <Form />
    </div>
  );
};
export default Booklist;
