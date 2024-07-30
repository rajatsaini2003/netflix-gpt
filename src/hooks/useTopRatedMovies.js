
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from'react-redux';
import {addTopRatedMovies} from "../store/movieSlice";
import { useEffect } from 'react';

const useTopRatedMovies=()=>{
    const dispatch=useDispatch();
    const getMovies = async () =>{

    const top_rated=await  fetch(
        'https://api.themoviedb.org/3/movie/top_rated',
        API_OPTIONS
    );

    const top_ratedJson=await top_rated.json();   
    dispatch(addTopRatedMovies(top_ratedJson.results));

    };

    useEffect(()=>{
        getMovies();
        // eslint-disable-next-line
    },[]);
   
}
export default useTopRatedMovies;