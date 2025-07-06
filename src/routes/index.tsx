
import { createBrowserRouter } from "react-router";
import App from "@/App";
import Home from "@/pages/Home";
// import Books from "@/pages/Books";   
import Books from "@/pages/Books";
import Borrow from "@/pages/BorrowSummary";
import BorrowSummary from "@/pages/BorrowSummary";
// import BorrowSummary from "@/pages/borrow-summary";

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
      // {
      //   path: "borrow",
      //   Component: Borrow,
      // },
      {
        path: "borrow-summary",
        Component: BorrowSummary,
      }
    ],
  },
]);

export default router;

