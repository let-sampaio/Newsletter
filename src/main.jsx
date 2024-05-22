import React from 'react'
import ReactDOM from 'react-dom/client'


import Home from './components/Home.jsx'
import Submitte from './components/Submitte.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"/submitte",
    element:<Submitte/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
