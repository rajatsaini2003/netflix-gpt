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
            path:"/browse",
            element:<Browse/>
        }
    ]);

  return (
    <div className=''>
      <RouterProvider router={createRouter} />
    </div>
  )
}

export default Body
