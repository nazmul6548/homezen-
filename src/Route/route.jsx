import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import LogIn from "../SigninSignup/LogIn";
import Register from "../SigninSignup/Register";
import ErrorPage from "../component/ErrorPage";
import AllProperties from "../Pages/AllProperties";
import AllPropertyDetails from "../Pages/AllPropertyDetails";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Statistic from "../Pages/dashboard/common/Statistic";
import AddPropertys from "../Pages/dashboard/Agent/AddPropertys";
import MyAddedPro from "../Pages/dashboard/Agent/MyAddedPro";
import MyProfile from "../Pages/dashboard/Agent/MyProfile";
import ManageUsers from "../Pages/admin/ManageUsers";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
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
        {
            path:"/allproperties",
            element:<AllProperties></AllProperties>

        },
        {
            path:"/house/:id",
            element:<AllPropertyDetails></AllPropertyDetails>
        },
       
      ]
    },
    {
        path:"/dashboard",
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                index:true,
                element:<Statistic></Statistic>
            },
            {
                path:'addproperty',
                element:<AddPropertys></AddPropertys>
            },
            {
                path:'myaddedpro',
                element:<MyAddedPro></MyAddedPro>
            },
            {
                path:'myprofile',
                element:<MyProfile></MyProfile>
            },
            {
                path:"manageusers",
                element:<ManageUsers></ManageUsers>
            }
        ]
    }
  ]);