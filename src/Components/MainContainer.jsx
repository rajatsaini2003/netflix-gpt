import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useState } from 'react';


const MainContainer = () => {

  const movies=useSelector(store=>store.movies?.nowPlayingMovies);
  const [play,setPlay]=useState(0);
  const [audio,setAudio]=useState(0);
  if(!movies) return ;

  const mainMovie=movies[0]; 
  //console.log(mainMovie.id);
  const {original_title,overview}=mainMovie;

  return (
    <div >
      <VideoTitle title={original_title} overview={overview} play={play} audio={audio}
        setPlayFunc={(play)=>{setPlay(play)}}
        setAudioFunc={(audio)=>{setAudio(audio)}}
      />
      <VideoBackground movieId={mainMovie.id} play={play} audio={audio}/>
    </div>
  )
}

export default MainContainer;