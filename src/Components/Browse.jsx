import React  from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch=useSelector(store=>store.gpt.showgptSearch
  )
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  //console.log(showGptSearch);
  return (
    <div className='overflow-x-hidden' > 
        <Header />
        {
          showGptSearch?
          (<GptSearch />):
          (<>
          <MainContainer />
          <SecondaryContainer/>
          </>)
        }   
    </div>
  )
}

export default Browse;