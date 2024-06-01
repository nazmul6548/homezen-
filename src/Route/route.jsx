import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import LogIn from "../SigninSignup/LogIn";
import Register from "../SigninSignup/Register";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<LogIn></LogIn>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
      ]
    },
  ]);