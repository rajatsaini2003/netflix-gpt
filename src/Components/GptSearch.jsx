import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
      <div className='fixed  -z-10'>
        <img 
        className='w-[100vw] h-[100vh]'
        src={BG_IMG_URL}
        alt='background-img'/>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch