import React, { useRef, useState } from 'react'
import Header from './Header';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase'
import { checkValidData } from '../utils/validations';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
function Login() {
  const dispatch=useDispatch();
    const navigate=useNavigate();
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
              photoURL: "https://avatars.githubusercontent.com/u/133947980?v=4"
            }).then(() => {
              console.log('User signed up:', user);
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(
                addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL
              }));
              navigate("/browse");
            }).catch((error) => {
              setErrorMessage(error.message);
            });
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage+"-"+errorCode);
            });
            
        }
        else{
          // sign in
          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
          // Signed in 
           const user = userCredential.user;
           console.log('User signed in:', user);
           navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage("Incorrect email or password");
  });
        }
        
    }
  return (
    <div className=''>
      <Header/>
      <div className='absolute'>
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_small.jpg" 
        alt=''/>
      </div>
      <form 
      onSubmit={(e)=>e.preventDefault()}
       className='p-12 absolute mt-24  text-white mx-auto right-0 left-0 
       w-4/12 bg-black rounded-lg bg-opacity-80 ' >
        <h1 className='font-bold text-3xl py-4 p-2'>{isSignInForm?"Sign In":"Sign Up"}</h1>
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
