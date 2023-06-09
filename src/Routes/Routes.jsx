import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/error-page";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import SelectedClasses from "../Pages/SelectedClasses/SelectedClasses";
import Dashboard from "../Layout/Dashboard";
import MyClasses from "../Pages/dashboard/MyClasses";
  

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
            element:<Classes></Classes>

        },
        {
            path: '/dashboard',
            element:<Home></Home>

        },
        {
            path: '/login',
            element:<Login></Login>

        },
        {
            path: '/registration',
            element:<Registration></Registration>

        },
        {
            path: '/selectedclasses',
            element:<SelectedClasses></SelectedClasses>

        },
      ]
      
    },
    {path:'dashboard',
      element: <Dashboard></Dashboard>,
      children:[{
        path:'myclasses',
        element:<MyClasses></MyClasses>
        },
      {
        path:'selectedclasses',
        element:<SelectedClasses></SelectedClasses>
        }
      ]
    }
  ]);
  