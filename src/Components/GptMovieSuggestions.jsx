import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GptMovieSuggestions = () => {
  const gpt=useSelector(store=>store.gpt);
  const {movieNames,movieResult}=gpt;
  if(!movieNames)return null;
  return (
    <div className='m-2 p-2 pl-6 md:p-4 md:m-4 bg-black text-white opacity-90'>
      <div className=''>
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