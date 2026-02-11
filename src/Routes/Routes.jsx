import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            },
            {
                path: '/book/:id',
                loader: () => fetch(`/booksData.json`),
                Component: BookDetails,
            }
        ]
    },
]);

