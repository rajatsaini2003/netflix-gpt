import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
        <img 
        className='w-[100vw] h-[100vh] object-cover'
        src="BG.png"
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