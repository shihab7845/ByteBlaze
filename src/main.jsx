import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import Mainlayouts from './Layouts/Mainlayouts.jsx'

const router = createBrowserRouter([
 {
  path:'/',
  element:<Mainlayouts></Mainlayouts>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/blogs',
      element:<Blogs></Blogs>
    },
    {
      path:'/bookmarks',
      element:<Bookmarks></Bookmarks>
    }
  ]
 },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <RouterProvider router={router}/>
  </>,
)
