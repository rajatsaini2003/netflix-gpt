import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {auth} from "../utils/firebase"
import { onAuthStateChanged } from 'firebase/auth';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../store/userSlice';
function Body() {
   const dispatch=useDispatch();
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

    useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       const {uid,email,displayName,photoURL} = user;
       dispatch(
        addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL
      }));
      } 
      else {
        dispatch(removeUser());
      }
    });
    },[])

  return (
    <div>
      <RouterProvider router={createRouter} />
    </div>
  )
}

export default Body
