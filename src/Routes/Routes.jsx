import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
  

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        // {
        //   path: 'menu', 
        //   element: <Menu></Menu>
        // },
        // {
        //   path: 'order/:category',
        //   element: <Order></Order>
        // },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        // {
        //   path: 'secret',
        //   element: <PrivateRoute><Secret></Secret></PrivateRoute>
        // }
      ]
    },
    // {
    //   path: 'dashboard',
    //   element: <Dashboard></Dashboard>,
    //   children: [
    //     {
    //       path: 'cart',
    //       element: <Cart></Cart>
    //     }
    //   ]
    // }
  ]);