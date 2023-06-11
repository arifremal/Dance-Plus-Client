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
          element:<PrivateRoute><InstructorPage></InstructorPage></PrivateRoute>
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
        }
      ]
    },
  ]);