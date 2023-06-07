import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/error-page";
import Instructors from "../Pages/Instructors/Instructors";
  

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      errorElement: <ErrorPage />,

      children:[
        {
            path: '/',
            element:<Home></Home>

        },
        {
            path: '/instructors',
            element:<Instructors></Instructors>

        },
        {
            path: '/classes',
            element:<Home></Home>

        },
        {
            path: '/dashboard',
            element:<Home></Home>

        },
      ]
    },
  ]);
  