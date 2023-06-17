import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Private from "./Private/Private";
import DashboardLayout from "../Layout/DashboardLayout";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'ourmenu',
            element: <OurMenu></OurMenu>
        },
        {
          path:'ourshop',
          element:<OurShop></OurShop>
        },
        {
          path:'ourshop/:category',
          element:<OurShop></OurShop>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<SignUp></SignUp>
        }
      ]
    },

    {
      path: '/dashboard',
      element:<Private><DashboardLayout></DashboardLayout></Private>,
      children:[
        {
          path:'/dashboard/mycart',
          element:<Private><MyCart></MyCart></Private>
        },
        {
          path:'/dashboard/allusers',
          element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path:'/dashboard/additems',
          element:<AdminRoutes><AddItems></AddItems></AdminRoutes>
        }
      ]
    }
  ]);

export default router;