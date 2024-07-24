import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
function Body() {
    const createRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/Browse",
            component:<Browse/>
        }
    ])
  return (
    <div>
      <RouterProvider router={createRouter} />
    </div>
  )
}

export default Body
