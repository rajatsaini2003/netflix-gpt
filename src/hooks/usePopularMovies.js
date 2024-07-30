
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from'react-redux';
import {addPopularMovies} from "../store/movieSlice";
import { useEffect } from 'react';

const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const getMovies = async () =>{
    const popular=await  fetch(
        'https://api.themoviedb.org/3/movie/popular',
        API_OPTIONS
    );

    const popularJson=await popular.json();
    //console.log(popularJson.results);
    dispatch(addPopularMovies(popularJson.results));

    };
    useEffect(()=>{
        getMovies();
        // eslint-disable-next-line
    },[]);
   
}
export default usePopularMovies;