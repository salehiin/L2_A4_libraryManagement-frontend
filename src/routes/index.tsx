import App from "@/App";
import Books from "@/pages/books";
import Borrow from "@/pages/borrow";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <App/>,
        Component: App,
        children: [
            {
                // path: "books",
                index: true,
                Component: Books,
            },
            {
                path: "books",
                // index: true,
                Component: Books,
            },
            {
                path: 'borrow',
                Component: Borrow
            }
        ]  
    }
]);

export default router;