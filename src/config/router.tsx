import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LayoutPrivate from "../layout/LayoutPrivate";
import Todo from "../pages/Todo";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutRoot/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/todo",
                element: <LayoutPrivate/>,
                children: [
                    {
                        index: true,
                        element: <Todo/>
                    },
                ]
            }
        ]
    }
])