import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateShop from "../CreateShop";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/DashBoard";
import ShopManager from "../DashBoardRoutes/ShopManager";
import Products from "../DashBoardRoutes/Products";
import Update from "../DashBoardRoutes/Update";
import SalesProducts from "../DashBoardRoutes/Sales/SalesProducts";
import CheckOut from "../DashBoardRoutes/CheckOut";
import ManagerSalesSummary from "../DashBoardRoutes/Sales/ManagerSalesSummary";
import Subscription from "../DashBoardRoutes/Sales/Subscription";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Payment from "../DashBoardRoutes/Payment/Payment";
import AllUsers from "../DashBoardRoutes/Admin/AllUsers";
  

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: 'createShop', 
          element: <PrivateRoute><CreateShop></CreateShop></PrivateRoute>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'shopManager',
          element: <ShopManager></ShopManager>,
          loader:()=>fetch(`https://inventory-managment-sarver.vercel.app/products/`)
        },
        {
          path: 'salesProducts',
          element: <SalesProducts></SalesProducts>,
          loader:()=>fetch(`https://inventory-managment-sarver.vercel.app/products/`)
        },
        {
          path: 'salesSummary',
          element: <ManagerSalesSummary></ManagerSalesSummary>,
          // loader:()=>fetch(`https://inventory-managment-sarver.vercel.app/products/`)
        },
        {
          path: 'subscription',
          element: <Subscription></Subscription>,
          
        },
        {
          path: 'payments',
          element: <Payment></Payment>,
          
        },
        {
          path: 'allUsers',
          element: <AllUsers></AllUsers>,
          loader: () => fetch(`https://inventory-managment-sarver.vercel.app/user`)
          
        },
        {
          path: 'checkOutCart',
          element: <CheckOut></CheckOut>,
          loader: () => fetch(`https://inventory-managment-sarver.vercel.app/carts`)
        },
        {
          path: 'update/:id',
          element: <Update></Update>,
          loader:({params})=>fetch(`https://inventory-managment-sarver.vercel.app/products/${params.id}`)
        },
        {
          path: 'products',
          element: <Products></Products>,
          loader: () => fetch(`https://inventory-managment-sarver.vercel.app/shop`)
        }
      ]
    }
  ]);