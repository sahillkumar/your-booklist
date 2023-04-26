import Booklist from "components/Booklist";
import BookContextProvider from "contexts/bookcontext";
import React from "react";

function App() {
  return (
    <BookContextProvider>
      <div className="container">
        <Booklist />
      </div>
    </BookContextProvider>
  );
}

export default App;
