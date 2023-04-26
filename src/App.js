import Booklist from "components/Booklist";
import BookContextProvider from "contexts/bookcontext";
import React from "react";
import { RouterProvider } from "react-router";
import router from "router";

function App() {
  return (
    <BookContextProvider>
      <RouterProvider router={router}>
        <div className="container">
          <div className="booklistContainer">
            <Booklist />
          </div>
        </div>
      </RouterProvider>
    </BookContextProvider>
  );
}

export default App;
