import Booklist from "components/Booklist";
import Footer from "components/Footer";
import SidePanel from "components/SidePanel";
import BookContextProvider from "contexts/bookcontext";
import React from "react";

function App() {
  return (
    <BookContextProvider>
      <div className="container">
        <div>
          <SidePanel />
        </div>
        <div className="booklistContainer">
          <Booklist />
        </div>
      </div>
      <Footer />
    </BookContextProvider>
  );
}

export default App;
