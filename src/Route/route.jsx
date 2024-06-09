import { createBrowserRouter } from "react-router-dom";
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
import UpdatePropery from "../Pages/dashboard/Agent/UpdatePropery";
import AdminRoute from "./AdminRoute";
import AgentRoute from "./AgentRoute";
import RequstedProperty from "../Pages/dashboard/Agent/RequstedProperty";
import PaymentSystem from "../Pages/guest/PaymentSystem";
import SoldProperty from "../Pages/dashboard/Agent/SoldProperty";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allproperties",
        element: (
          <PrivateRoute>
            <AllProperties></AllProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "/house/:id",
        element: (
          <PrivateRoute>
            <AllPropertyDetails></AllPropertyDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <PrivateRoute><Statistic></Statistic></PrivateRoute>,
      },
      {
        path: "addproperty",
        element: (
        
            <PrivateRoute>
              <AgentRoute>
              <AddPropertys></AddPropertys>
              </AgentRoute>
            </PrivateRoute>
         
        ),
      },
      {
        path: "myaddedpro",
        element: (
          
            <PrivateRoute>
             <AgentRoute>
             <MyAddedPro></MyAddedPro>
             </AgentRoute>
            </PrivateRoute>
          
        ),
      },
      {
        path: "myprofile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "manageusers",
        element: (
         
            <PrivateRoute>
              <AdminRoute>
              <ManageUsers></ManageUsers>
              </AdminRoute>
            </PrivateRoute>
          
        ),
      },
      {
        path: "managereview",
        element: (
          
            <PrivateRoute>
              <AdminRoute>
              <ManageReview></ManageReview>
              </AdminRoute>
            </PrivateRoute>
          
        ),
      },
      {
        path: "managepropertys",
        element: (
          <PrivateRoute>
            <AdminRoute>
            <ManagePropertys></ManagePropertys>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "mywishlist",
        element:<PrivateRoute><MyWishList></MyWishList></PrivateRoute>,
      },
      {
        path: "bought",
        element: (
          <PrivateRoute>
            <PropertyBought></PropertyBought>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/offerd/:id",
        element:<PrivateRoute><OfferdPage></OfferdPage></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/wishlist/${params.id}`),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <UpdatePropery></UpdatePropery>
            </AgentRoute>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/house/${params.id}`)
      },
      {
        path:"requstedproperty",
        element:<PrivateRoute><RequstedProperty></RequstedProperty></PrivateRoute>
      },
      {
        path:"bought/payment/:id",
        element:<PrivateRoute><PaymentSystem></PaymentSystem></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/offerd/${params.id}`)
      },
      {
        path:"sold",
        element:<PrivateRoute><AgentRoute><SoldProperty></SoldProperty></AgentRoute></PrivateRoute>
      }
    ],
  },
]);
