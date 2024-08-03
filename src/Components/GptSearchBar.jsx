import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector,useDispatch } from 'react-redux'
import { addGptMovieResult } from '../store/gptSlice';
import { API_OPTIONS } from '../utils/constant'
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_API } from '../utils/constant';

const GptSearchBar = () => {
  const dispatch=useDispatch();  
    const langKey=useSelector(store=>store.config.lang);
    const searchText=useRef(null);
    //search movie in TMDB
    const fetchMovie=async(movie)=>{
      const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+
        movie+
        "&include_adult=false&language=en-US&page=1", API_OPTIONS);
      const json=await data.json();
      return json.results;
    }

    const handleGptSearchClick = async ()=>{
        // console.log(searchText.current.value);
       // make api call to openai to get movie results
        const gptQuery="Act as movie recommendation system and suggest some movies for the query "+searchText.current.value
        + "only give me name of 5 movies, comma separated like this example given ahead . example result : avengers end game , the avengers  , iron man , avenger age of ultron , deadpool and wolverine, do not make names bold and give anything else"
        try {
          
          const genAI = new GoogleGenerativeAI(GEMINI_API);

          // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
          const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

          const prompt = gptQuery;

          const result = await model.generateContent(prompt);
          const response = await result.response;
          const text = response.text();
          const gptMovies=text.split(",");
          const promisedArray=gptMovies.map((movie)=>fetchMovie(movie));
          
          const tmdbResult=await Promise.all(promisedArray);
          console.log(tmdbResult);
          dispatch(addGptMovieResult({movieNames:gptMovies,movieResult:tmdbResult}));
        } 
        catch (error) {
          console.log(error);
          console.log("can not retrieve data from gemini Api so using hard coded data instead");
          const gptMovies=["Avengers","Batman","Iron Man" ,"Thor","Spider Man"];
          const promisedArray=gptMovies.map((movie)=>fetchMovie(movie));
          
          const tmdbResult=await Promise.all(promisedArray);
          console.log(tmdbResult);
          dispatch(addGptMovieResult({movieNames:gptMovies,movieResult:tmdbResult}));
        }
        
    }
  return (
    <div className='md:pt-[10%] pt-[55%]  flex justify-center'>
        <form
        onSubmit={(e)=>e.preventDefault()}
         className='w-full md:w-1/2 bg-black grid grid-cols-12 '>
            <input 
            ref={searchText}
            className=' p-3 m-3 col-span-9 '
            type="text" 
            placeholder={lang[langKey].gptPlaceHolder}/>
            <button 
            onClick={handleGptSearchClick}
            className='p-3 m-3 bg-red-700 col-span-3 ml-1 text-white rounded-lg'>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar