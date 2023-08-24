import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import { router } from "./Routes"
import './index.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { app,auth } from "./firebaseConfig"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router ={router}/>
    <ToastContainer/>
  </React.StrictMode>,
)
