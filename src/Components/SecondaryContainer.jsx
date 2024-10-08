import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  //console.log(movies);
  return movies&&(
    <div className="  bg-black">
      <div className=' mt-0 md:-mt-28  relative z-20 px-4 md:pl-12 md:pr-4'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Up Coming"} movies={movies.upcomingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer;