import React from 'react'
import { IMG_URL } from '../utils/constant'
const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img src={IMG_URL+posterPath} alt="" />
    </div>
  )
}

export default MovieCard