import Booklist from "components/Booklist";
import Container from "components/Container";
import BookContextProvider from "contexts/bookcontext";
import React from "react";

function App() {
  return (
    <BookContextProvider>
      <Container>
        <Booklist />
      </Container>
    </BookContextProvider>
  );
}

export default App;
