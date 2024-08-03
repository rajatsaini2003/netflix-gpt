import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useState } from 'react';


const MainContainer = () => {

  const movies=useSelector(store=>store.movies?.nowPlayingMovies);
  const play=useSelector(store=>store.movies?.play)
  const [audio,setAudio]=useState(0);
  if(!movies) return ;

  const mainMovie=movies[0]; 
  //console.log(mainMovie.id);
  const {original_title,overview}=mainMovie;

  return (
    <div className='pt-[40%] bg-black md:pt-0' >
      <VideoTitle title={original_title} overview={overview} play={play} audio={audio}
        
        setAudioFunc={(audio)=>{setAudio(audio)}}
      />
      <VideoBackground movieId={mainMovie.id} play={play} audio={audio}/>
    </div>
  )
}

export default MainContainer;