import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GptMovieSuggestions = () => {
  const gpt=useSelector(store=>store.gpt);
  const {movieNames,movieResult}=gpt;
  if(!movieNames)return null;
  return (
    <div className='p-4 mt-4 bg-black text-white'>
      <div className='bg-black'>
        {movieNames.map((movie,index)=>
          <MovieList 
          key={movie}
          title={movie} 
          movies={movieResult[index]} />
        )}
      </div>
    </div>
  )
}

export default GptMovieSuggestions