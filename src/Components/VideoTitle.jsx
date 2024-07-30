import React from 'react'
import { Play_Icon } from '../utils/constant'
const VideoTitle = ({title,overview,play,setPlayFunc,audio,setAudioFunc}) => {
  const handlePlayClick=()=>{
    setPlayFunc(!play);
  }
  const handleAudioClick=()=>{
    // add audio control
    setAudioFunc(!audio);
  }
  function truncateString(str, num) {
    if (str?.length <= num) {
        return str;
    }
    return str?.substring(0, num) + '...';
}
  const truncatedoverview = truncateString(overview, 200); 
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 pl-12 absolute text-white 
    bg-gradient-to-r from-black'>
        <h1 
        className='text-4xl font-extrabold '
        >{title}</h1>
        <p
        className='py-6 text-lg w-1/4 '
        >{truncatedoverview}</p>
        <div className='flex gap-4'>
            <button onClick={handlePlayClick}
            className=' flex justify-center items-center bg-gray-700 text-white
            bg-opacity-80 p-2 w-24 rounded-md text-md font-bold hover:bg-opacity-70 '
            >
              {<img className='w-6 h-6'
              src= {Play_Icon} alt='play-icon'
              />} 
               {play?"Stop":"Play"}</button>
            <button
            className= 'bg-gray-700 font-bold text-white p-2 w-24 rounded-md text-md bg-opacity-80 hover:bg-opacity-70  '
            >More Info</button>  
             {play ? (
          <button
            onClick={handleAudioClick}
            className='bg-gray-700 font-bold text-white p-2 w-24 rounded-md text-md bg-opacity-80 hover:bg-opacity-70'
          >
            {audio ? "Unmute" : "Mute"}
          </button>
        ): null}
        </div>
    </div>
  )
}

export default VideoTitle