import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './Layout/MainRoot';
import Home from './Componentes/Home/Home';
import Login from './Componentes/Login/Login';
import Register from './Componentes/Register/Register';
import AuthProviders from './AuthProviders/AuthProviders';
import Orders from './Componentes/Orders/Orders';
import PrivetRouter from './Componentes/Privet/PrivetRouter';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/orders',
        element:<PrivetRouter><Orders></Orders></PrivetRouter>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>

  </React.StrictMode>,
)
