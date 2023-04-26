const { default: Booklist } = require("components/Booklist");
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "",
    element: <Booklist />,
  },
]);

export default router;
