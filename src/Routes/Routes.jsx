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
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/dashboard/All Users/AllUsers";
import Addaclass from "../Pages/Addaclass";
import Manageclasses from "../Pages/Manageclasses";
  

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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[{
        path:'myclasses',
        element:<MyClasses></MyClasses>
        },
      {
        path:'selectedclasses',
        element:<SelectedClasses></SelectedClasses>
        },
      {
        path:'allusers',
        element:<AllUsers></AllUsers>
        },
      {
        path:'manageclasses',
        element:<Manageclasses></Manageclasses>
        },
      {
        path:'allusers',
        element:<AllUsers></AllUsers>
        },
      {
        path:'addaclass',
        element:<Addaclass></Addaclass>
        },
      {
        path:'allusers',
        element:<AllUsers></AllUsers>
        },
      ]
    }
  ]);
  