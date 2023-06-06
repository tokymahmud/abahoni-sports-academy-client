import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/error-page";
  

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      errorElement: <ErrorPage />,

      children:[
        {
            path: '/',
            element:<Home></Home>

        }
      ]
    },
  ]);
  