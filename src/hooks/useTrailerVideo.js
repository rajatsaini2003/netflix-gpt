import  { useEffect } from 'react'
import {API_OPTIONS} from "../utils/constant"
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../store/movieSlice';
const useTrailerVideo=(movieId)=>{
    const dispatch=useDispatch();
    const trailer=useSelector(store=>store.movies.trailerVideo)
    const getMovieTrailer= async()=>{
        const data= await fetch(
          'https://api.themoviedb.org/3/movie/'
          +movieId
          +'/videos?language=en-US',API_OPTIONS);
        const json=await data.json();
        //console.log(json);
        const filterData=json.results.filter(video=>video.type==="Trailer");
        const trailer=filterData.length?filterData[0]:json.results[0];
        dispatch(addTrailerVideo(trailer));
      }
      useEffect(()=>{
        if(!trailer)
        getMovieTrailer();
        // eslint-disable-next-line
      },[]);
}
export default useTrailerVideo