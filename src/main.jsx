import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main.jsx'
import Blog from './pages/blog/Blog.jsx'
import Login from './pages/login/Login.jsx'
import Home from './pages/home/Home.jsx'
import ChefDetails from './pages/chefDetails/ChefDetails.jsx'
import Regestration from './pages/login/Regestration.jsx'
import AuthProvider from './authProvider/AuthProvider.jsx'
import PrivetRoute from './privetRoute/PrivetRoute.jsx'
import Errorpage from './pages/errorPage/Errorpage.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader:()=>fetch('https://the-chef-zone-server-kamelmahmud0408.vercel.app/chefdata')
      },
      {
        path: 'chefdetails/:id',
        element: <PrivetRoute><ChefDetails></ChefDetails></PrivetRoute>,
        loader: ({params}) => fetch(`https://the-chef-zone-server-kamelmahmud0408.vercel.app/chefdata/${params.id}`)
    },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/regestration',
        element:<Regestration></Regestration>
      }
     
     

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
