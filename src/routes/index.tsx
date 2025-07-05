
import { createBrowserRouter } from "react-router";
import App from "@/App";
import Home from "@/pages/Home";     
// import Books from "@/pages/Books";   
import Books from "@/pages/Books";
import Borrow from "@/pages/Borrow";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "books",
        Component: Books,
      },
      {
        path: "borrow",
        Component: Borrow,
      },
    ],
  },
]);

export default router;

