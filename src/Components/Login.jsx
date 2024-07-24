import React, { useState } from 'react'
import Header from './Header';

function Login() {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const toggleSignUpForm=()=>{
        setIsSignInForm(!isSignInForm);
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
       className='p-12 absolute mt-24  text-white mx-auto right-0 left-0 
       w-4/12 bg-black rounded-lg bg-opacity-80 ' >
        <h1 className='font-bold text-3xl py-4 p-2'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && 
            <input type="text" placeholder='Full Name'
            className='p-4 my-4 w-full bg-gray-800 rounded-lg bg-opacity-70 ' 
            />
        }
        <input type="text" placeholder='Email Address'
        className='p-4 my-4 w-full bg-gray-800 rounded-lg bg-opacity-70 ' 
        />
        <input type="password" placeholder='Password'
        className='p-4 my-4 w-full bg-gray-800 rounded-lg bg-opacity-70 ' 
        />
        <button className='bg-red-700 p-4 my-6 w-full rounded-lg cursor-pointer '>
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
