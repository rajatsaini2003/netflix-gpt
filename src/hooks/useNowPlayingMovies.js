
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from'react-redux';
import {addNowPlayingMovies} from "../store/movieSlice";
import { useEffect } from 'react';

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const getMovies = async () =>{

    const now_playing=await  fetch(
        'https://api.themoviedb.org/3/movie/now_playing',
        API_OPTIONS
    );
    const now_playingJson=await now_playing.json();
   
    dispatch(addNowPlayingMovies(now_playingJson.results));
    };
    useEffect(()=>{
        getMovies();
        // eslint-disable-next-line
    },[]);
   
}
export default useNowPlayingMovies;