import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
        <img 
        className='w-[100vw] h-[100vh] object-cover'
        src={BG_IMG_URL}
        alt='background-img'/>
    </div>
    <div className=''>   
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
    </>
  )
}

export default GptSearch