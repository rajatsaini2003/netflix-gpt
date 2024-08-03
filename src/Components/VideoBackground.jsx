import React from 'react'
import { useSelector} from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';
const VideoBackground = ({movieId,play,audio}) => {
  
  const trailerData=useSelector(store=>store.movies?.trailerVideo);
 
  useTrailerVideo(movieId);
 
  return (
    <div className='w-screen'>
      <iframe 
      className='w-[100vw] aspect-video '
      src={"https://www.youtube.com/embed/"+trailerData?.key+"?&autoplay="+play+"&mute="+audio+"&controls=0&modestbranding=1"
      }
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      ></iframe>
    </div>
  )
}

export default VideoBackground