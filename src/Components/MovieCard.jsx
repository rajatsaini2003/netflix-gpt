import React from 'react'
import { IMG_URL } from '../utils/constant'
const MovieCard = ({posterPath}) => {
  if(posterPath===null)
    return null;
  return (
    <div className='w-36 md:w-48 pr-5 '>
        <img src={IMG_URL+posterPath} alt="" />
    </div>
  )
}

export default MovieCard