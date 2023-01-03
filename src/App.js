import {Component} from "react";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Login from './pages/login/login'
import Main from "./pages/main/main";



/*
application root
 */


export default class App extends Component{
    render() {
        const router = createBrowserRouter(
            [
                {
                    path: '*',
                    element: <Main />,
                },
                {
                    path: '/login',
                    element: <Login />,
                },
            ]
            );
        return(
            <RouterProvider router={router} />
        )
    }
}