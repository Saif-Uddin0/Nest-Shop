import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            index: true,
            element: <Home></Home>
        },
        {
            path: '/about' ,
            element: <h1>about</h1>
        },
        {
            path: '/nothing',
            element: <h1>hello</h1>
        },
    ]
  },
]);