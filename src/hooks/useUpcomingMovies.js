
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from'react-redux';
import {addUpcomingMovies} from "../store/movieSlice";
import { useEffect } from 'react';

const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
    const getMovies = async () =>{

    
    const upcoming=await  fetch(
        'https://api.themoviedb.org/3/movie/upcoming',
        API_OPTIONS
    );
   
    const upcomingJson=await upcoming.json();
    
    dispatch(addUpcomingMovies(upcomingJson.results));
    };
    useEffect(()=>{
        getMovies();
        // eslint-disable-next-line
    },[]);
   
}
export default useUpcomingMovies;