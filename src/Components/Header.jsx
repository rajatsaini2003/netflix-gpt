import React, { useEffect } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../store/userSlice';
import { LOGO_URL } from '../utils/constant';
import { toggleGptSearch } from '../store/gptSlice'
function Header() {
  const user=useSelector(store=>store.user);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
       const {uid,email,displayName,photoURL} = user;
       dispatch(
        addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL
      }));
      navigate('/browse');
      } 
      else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return ()=>unsubscribe();
     // eslint-disable-next-line
    },[])

  const handleSignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error);
      navigate("/error")
    });
  }
  const handleGptSearch=()=>{
    //toggle GPT search
    dispatch(toggleGptSearch());
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black 
     z-10 w-screen flex justify-between '>
      <img 
      className='w-36 mx-8 my-6 '
      src={LOGO_URL} 
      alt="LOGO" />
      { user &&
        (<div className='flex my-6 gap-2'>
          <button
          onClick={handleGptSearch}
          className='py-2 px-4 m-2 mx-4 cursor-pointer bg-purple-800 text-white rounded-lg  ' >
            GPT search
          </button>
        <img 
        className='w-12 h-12 '
        src={user.photoURL} 
        alt="usericon"/>
        <button onClick={handleSignOut}
        className="font-bold text-white">
          (sign out)
        </button>
      </div>
    )}
    </div>
  )
}

export default Header
