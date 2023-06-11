import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

import InstructorPage from "../Pages/InstructorPage";
import PrivateRoute from "../Authproviders/PrivateRoute";
import Classes from "../Pages/Classes";
import MyselectedClass from "../Components/MyselectedClass";
import Dashboard from "../Layout/Dashboard";
import Myclass from "../Pages/DashBoard/Myclass";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>  ,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
          path:'instructor',
          element:<InstructorPage></InstructorPage>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },{
          path:'classes',
          element:<Classes></Classes>
        },{
        },{
          path:'myclasses',
          element: <PrivateRoute><MyselectedClass></MyselectedClass></PrivateRoute>
        },
        // {
        //   path:'select',
        //   element:<MyselectedClass></MyselectedClass>
        // }
      ]
    },
    {
      path:'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'selectedclass',
          element:<Myclass></Myclass>
        }
      ]
    }
  ]);