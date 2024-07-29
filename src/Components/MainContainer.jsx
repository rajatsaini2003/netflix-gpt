import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
const MainContainer = () => {
  const movies=useSelector(store=>store.movies?.nowPlayingMovies);
  if(!movies) return ;
  const mainMovie=movies[1]; 
  //console.log(mainMovie.id);
  const {original_title,overview}=mainMovie
  return (
    <div className='absolute w-screen h-screen mt-[-10px]'>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={mainMovie.id}/>
    </div>
  )
}

export default MainContainer;