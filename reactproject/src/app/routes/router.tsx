
import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Login from "../../features/pages/Login";
import Registration from "../../features/pages/Registration";

type Route = RouteObject[] | RouteObject;

const appRouters: Route = [
  {
    path: "/login",
    element: (
      <Login />
    )
  },
  {
    path: "/registration",
    element: (
      <Registration />
    )
  },
  {
    path: "/forgotpassword",
    element: (
      <h1>forgot password</h1>
    )
  },
  {
    path: "/resetpassword",
    element: (
      <h1>resetpassword</h1>
    )
  }
];

const router = createBrowserRouter([{
  path: "*",
  element: (
    <Suspense fallback={<CircularProgress />}>
      <h1>Page not found</h1>
    </Suspense>
  )
},
...appRouters,
]);


const Router = () => <RouterProvider router={router} />
export default Router;