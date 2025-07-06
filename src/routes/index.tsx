
import { createBrowserRouter } from "react-router";
import App from "@/App";
import Home from "@/pages/Home";   
import Books from "@/pages/Books";
import BorrowSummary from "@/pages/BorrowSummary";
import BookDetails from "@/pages/BookDetails";

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
        path: "borrow-summary",
        Component: BorrowSummary,
      },
      {
        path: "/books/:id",
        Component: BookDetails,
      }
    ],
  },
]);

export default router;

