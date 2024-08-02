
import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from'react-redux';
import {addUpcomingMovies} from "../store/movieSlice";
import { useEffect } from 'react';

const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
    const movies=useSelector(store=>store.movies.upcomingMovies)
    const getMovies = async () =>{

    
    const upcoming=await  fetch(
        'https://api.themoviedb.org/3/movie/upcoming',
        API_OPTIONS
    );
   
    const upcomingJson=await upcoming.json();
    
    dispatch(addUpcomingMovies(upcomingJson.results));
    };
    useEffect(()=>{
        if(!movies)
        getMovies();
        // eslint-disable-next-line
    },[]);
   
}
export default useUpcomingMovies;