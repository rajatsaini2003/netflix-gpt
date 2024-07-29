import React from 'react'
import { Play_Icon } from '../utils/constant'
const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-16  absolute bg-gradient-to-r from-black  text-white '>
        <h1 
        className='text-4xl font-extrabold w-1/4'
        >{title}</h1>
        <p
        className='py-6 text-lg w-1/3'
        >{overview}</p>
        <div className='flex gap-4'>
            <button
            className=' flex justify-center items-center bg-gray-700 text-white
            bg-opacity-80 p-2 w-24 rounded-md text-md font-bold hover:bg-opacity-70 '
            >
              {<img className='w-6 h-6'
              src= {Play_Icon} alt='play-icon'
              />} 
               Play</button>
            <button
            className= 'bg-gray-700 font-bold text-white p-2 w-24 rounded-md text-md bg-opacity-80 hover:bg-opacity-70  '
            >More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle