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
import ManageReview from "../Pages/admin/ManageReview";
import ManagePropertys from "../Pages/admin/ManagePropertys";
import PrivateRoute from "./PrivateRoute";
import MyReviews from "../Pages/guest/MyReviews";
import MyWishList from "../Pages/guest/MyWishList";
import PropertyBought from "../Pages/guest/PropertyBought";
import OfferdPage from "../Pages/guest/OfferdPage";


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
            element:<PrivateRoute><AllProperties></AllProperties></PrivateRoute>

        },
        {
            path:"/house/:id",
            element:<PrivateRoute><AllPropertyDetails></AllPropertyDetails></PrivateRoute>
        },
       
      ]
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
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
            },
            {
                path:"managereview",
                element:<ManageReview></ManageReview>
            },
            {
                path:"managepropertys",
                element:<ManagePropertys></ManagePropertys>
            },
            {
                path:"myreviews",
                element:<MyReviews></MyReviews>
            },
            {
                path:"mywishlist",
                element:<MyWishList></MyWishList>
            },
            {
                path:"bought",
                element:<PropertyBought></PropertyBought>
            },
            {
                path:"offerd",
                element:<OfferdPage></OfferdPage>
            }
        ]
    }
  ]);