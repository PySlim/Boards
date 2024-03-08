import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import PageNotFound from "../core/elements/pageNotFound/Page.not.found.tsx";
import Login from "../core/elements/login/Login.tsx";
import Sign from "../core/elements/sign/Sign.tsx";
import Boards from "../core/elements/boards/Boards.tsx";
import Account from "../core/elements/account/Account.tsx";
import Table from "../core/elements/table/Table.tsx";

export const router = createBrowserRouter([
    {
        id: "app",
        path: '/',
        element: <App/>,
        errorElement: <PageNotFound/>,
        children:[
            {
                index: true,
                element: <Login/>
            },
            {
                path:"/sign",
                element: <Sign/>
            },
            {
                path:"/boards",
                element: <Boards/>
            },
            {
                path:"/account",
                element:<Account/>
            },
            {
                path:"/table/:id",
                element:<Table/>
            }
        ]
    }
])