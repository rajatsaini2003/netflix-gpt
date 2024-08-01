import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector,useDispatch } from 'react-redux'
import client from '../utils/OpenAi'
import { addGptMovieResult } from '../store/gptSlice';
import { API_OPTIONS } from '../utils/constant'
const GptSearchBar = () => {
  const dispatch=useDispatch();  
    const langKey=useSelector(store=>store.config.lang);
    const searchText=useRef(null);
    //search movie in TMDB
    const fetchMovie=async(movie)=>{
      const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
      const json=await data.json();
      return json.results;
    }

    const handleGptSearchClick = async ()=>{
        // console.log(searchText.current.value);
       // make api call to openai to get movie results
        const gptQuery="Act as movie recommendation system and suggest some movies for the query "+searchText.current.value
        + "only give me name of 5 movies, comma separated like this example given ahead . example result : avengers end game (2018), the avengers (2011) , iron man (2008), avenger age of ultron (2015) , deadpool and wolverine (2024) "
        try {
          const gptResult=await client.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
          console.log(gptResult.choices?.[0]?.message?.content);  
          const gptMovies=gptResult.choices?.[0]?.message?.content.split(",");
          const promisedArray=gptMovies.map((movie)=>fetchMovie(movie));
          
          const tmdbResult=await Promise.all(promisedArray);
          console.log(tmdbResult);
          dispatch(addGptMovieResult({movieNames:gptMovies,movieResult:tmdbResult}));
        } 
        catch (error) {
          console.log(error);
          console.log("can not retrieve data from openai api so using hard coded data instead");
          const gptMovies=["Avengers","Batman","Iron Man" ,"Thor","Spider Man"];
          const promisedArray=gptMovies.map((movie)=>fetchMovie(movie));
          
          const tmdbResult=await Promise.all(promisedArray);
          console.log(tmdbResult);
          dispatch(addGptMovieResult({movieNames:gptMovies,movieResult:tmdbResult}));
        }
       // const gptMovies=["The Avengers","Avengers: Age of Ultron","The Lord of the Rings" ,"The Dark Knight","Inception"]
        
    }
  return (
    <div className='pt-[10%] flex justify-center'>
        <form
        onSubmit={(e)=>e.preventDefault()}
         className='w-1/2 bg-black grid grid-cols-12 '>
            <input 
            ref={searchText}
            className=' p-4 m-4 col-span-10 '
            type="text" 
            placeholder={lang[langKey].gptPlaceHolder}/>
            <button 
            onClick={handleGptSearchClick}
            className='py-2 px-4 bg-red-700 col-span-2 m-4 text-white rounded-lg'>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar