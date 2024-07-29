import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import Mainlayouts from './Layouts/Mainlayouts.jsx'
import Blog from './Components/Blog.jsx'

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
      element:<Blogs></Blogs>,
      loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7')
      
    },
    {
      path: '/blog/:id',
      element: <Blog></Blog>,
      loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
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
