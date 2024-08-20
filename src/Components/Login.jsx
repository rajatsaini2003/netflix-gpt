import React, { useRef, useState } from 'react'
import Header from './Header';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase'
import { checkValidData } from '../utils/validations';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
import { BG_IMG_URL ,USER_AVATAR} from '../utils/constant';
function Login() {
  const dispatch=useDispatch();
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const email=useRef(null);
    const password=useRef(null);
    const userName=useRef(null);
    const toggleSignUpForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    const handleClick=()=>{
        //validate
        const message=checkValidData(userName?.current?.value,email?.current?.value,password?.current?.value);
        setErrorMessage(message);
        if(message) return;

        //sign in / sign up
        if(!isSignInForm){
          // sign up
          createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: userName.current.value, 
              photoURL: USER_AVATAR
            }).then(() => {
              //console.log('User signed up:', user);
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(
                addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL
              }));
            }).catch((error) => {
              setErrorMessage(error.message);
              console.log(error.message);
            });
            })
            .catch((error) => {
            setErrorMessage(error.message);
            console.log(error.message);
            });
            
        }
        else{
          // sign in
          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
          // Signed in 
          // eslint-disable-next-line 
           const user = userCredential.user;
           //console.log('User signed in:', user);
          })
          .catch((error) => {
            console.log(error.message);
            setErrorMessage("Incorrect email or password");
  });
        }
        
    }
  return (
    <div >
      <Header/>
      <div className='fixed -z-10'>
        <img 
        className='w-[100vw] h-[100vh] object-cover'
        src={BG_IMG_URL}
        alt='background-img'/>
    </div>
      <form 
      onSubmit={(e)=>e.preventDefault()}
       className='px-12 py-3 absolute md:mt-24 mt-[20vh] text-white  right-0 left-0 
         md:w-4/12 sm:w-8/12 sm:mx-auto mx-[5%] md:mx-auto bg-black rounded-lg bg-opacity-80 ' >
        <h1 
        className='font-bold text-3xl py-4 p-2'>
          {isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && 
            <input 
            ref={userName}
            type="text" placeholder='Full Name'
            className='p-4 my-4 w-full bg-gray-800 rounded-lg bg-opacity-70 ' 
            />
        }
        <input 
        ref={email}
        type="text" placeholder='Email Address'
        className='p-4 my-4 w-full bg-gray-800 rounded-lg bg-opacity-70 ' 
        />
        <input 
        ref={password}
        type="password" placeholder='Password'
        className='p-4 my-4 w-full bg-gray-800 rounded-lg bg-opacity-70 ' 
        />
        { errorMessage &&
            <p
            className='text-sm text-red-700'
            >{errorMessage}</p>
        }
        <button 
        onClick={handleClick}
        className='bg-red-700 p-4 my-6 w-full rounded-lg cursor-pointer '>
        {isSignInForm?"Sign In":"Sign Up"}
        </button>
        <p className='p-4 cursor-pointer'
        onClick={toggleSignUpForm}
        >{isSignInForm?"New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login;
