import React from 'react'
import ReactDOM from 'react-dom/client'

import './core/styles/index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/router.main.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(

    <RouterProvider router={router}></RouterProvider>

)
