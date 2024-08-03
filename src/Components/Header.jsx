import React, { useEffect } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../store/userSlice';
import { LOGO_URL } from '../utils/constant';
import { toggleGptSearch } from '../store/gptSlice'
import { supportedLanguages } from '../utils/constant';
import { changeLanguage } from '../store/configSlice';
import lang from '../utils/languageConstants'
function Header() {
  const user=useSelector(store=>store.user);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const showgptSearch=useSelector(store=>store.gpt.showgptSearch);
  const langKey=useSelector(store=>store.config.lang);
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
  const handleLangChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className='absolute px-2 md:px-8 py-2 bg-gradient-to-b from-black 
     z-10 w-screen flex flex-col md:flex-row md:justify-between '>
      <img 
      className='w-36 md:mx-8 my-6 mx-auto '
      src={LOGO_URL} 
      alt="LOGO" />
      { user &&
        (<div className='flex my-auto gap-2 justify-between'>
          {showgptSearch&&(<select 
          onChange={handleLangChange}
          className='p-2 m-2 bg-gray-900 text-white rounded-lg cursor-pointer'>
            {supportedLanguages.map(lang=>
                <option
                key={lang.identifier} 
                value={lang.identifier}
                >{lang.name}
                </option>
              )
            }
          </select>)}
          <button
          onClick={handleGptSearch}
          className='py-2 px-4 m-2 mx-4 cursor-pointer bg-purple-800 text-white rounded-lg  ' >
           { showgptSearch?lang[langKey].homePage:"GPT search"}
          </button>
        <img 
        className='w-12 h-12 my-auto'
        src={user.photoURL} 
        alt="usericon"/>
        <button onClick={handleSignOut}
        className="font-bold text-white my-auto ">
          (sign out)
        </button>
      </div>
    )}
    </div>
  )
}

export default Header
