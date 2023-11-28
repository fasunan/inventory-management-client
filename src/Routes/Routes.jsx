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
  

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
          loader:()=>fetch(`http://localhost:5000/products/`)
        },
        {
          path: 'update/:id',
          element: <Update></Update>,
          loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path: 'products',
          element: <Products></Products>,
          loader: () => fetch(`http://localhost:5000/shop`)
        }
      ]
    }
  ]);