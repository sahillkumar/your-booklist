import Booklist from "components/Booklist";
import BooksCatalog from "components/BooksCatalog";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <BooksCatalog />,
  },
  {
    path: "list",
    element: <Booklist />,
  },
]);

export default router;
