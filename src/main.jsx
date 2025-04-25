import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Deshboard from './components/Deshboard/Deshboard.jsx';
import ListedBook from './components/ListedBook/ListedBook.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: '/listedBook',
        element: <ListedBook></ListedBook>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: '/deshboard',
        element: <Deshboard></Deshboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
