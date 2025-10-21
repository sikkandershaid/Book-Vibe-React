import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/About";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";
import BookDetails from "../Pages/BooksDetails/BookDetails";
import ReadList from "../Pages/ReadList/ReadList";


export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "pages-To-Read", 
        element: <PagesToRead />,
        loader: () => fetch('/booksData.json').then((res) => res.json())
       },
      { 
        path: "read-list", 
        element: <ReadList/>, 
        loader: () => fetch('/booksData.json').then((res) => res.json())
      },
      {
        path: "/book-details/:pData",
        loader: () => fetch("/booksData.json").then((res) => res.json()),
        element: <BookDetails />,
      }

    ],
  },
]);