import React from 'react'
import { Play_Icon } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { changePlayConfig } from '../store/movieSlice'
const VideoTitle = ({title,overview,play,audio,setAudioFunc}) => {
  const dispatch=useDispatch();
  const handlePlayClick=()=>{
    dispatch(changePlayConfig());
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
    <div className='w-screen aspect-video px-4 pt-[35%] md:pt-[20%] md:px-24 md:pl-12 absolute text-white 
    bg-gradient-to-r from-black'>
        <h1 
        className='flex md:text-4xl font-extrabold mb-2 '
        >{title}</h1>
        <p
        className='hidden md:inline-block py-6 text-lg w-1/4 '
        >{truncatedoverview}</p>
        <div className='flex gap-4'>
            <button onClick={handlePlayClick}
            className=' flex justify-center items-center bg-gray-700 text-white
            bg-opacity-80 p-2 w-24 rounded-md text-md font-bold hover:bg-opacity-70 '
            >
              {!play?
              <img className='w-6 h-6'
              src= {Play_Icon} alt='play-icon'
              />:
              null
            } 
               {play?"Stop":"Play"}</button>
            <button
            className= 'hidden md:inline-block bg-gray-700 font-bold text-white p-2 w-24 rounded-md text-md bg-opacity-80 hover:bg-opacity-70  '
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