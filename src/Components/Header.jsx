import React, { useEffect } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../store/userSlice';
import { LOGO_URL } from '../utils/constant';
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
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black 
     z-10 w-full flex justify-between '>
      <img 
      className='w-36 mx-8 my-6 '
      src={LOGO_URL} 
      alt="LOGO" />
      { user &&
        (<div className='flex my-6 gap-2'>
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
