import { createSlice } from "@reduxjs/toolkit";
const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showgptSearch:true,
        movieResult:null,
        movieNames:null
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.showgptSearch=!state.showgptSearch
        },
        addGptMovieResult:(state,action)=>{
           const{movieNames,movieResult}=action.payload;
           state.movieNames=movieNames;
           state.movieResult=movieResult
        }
    }
})
export default gptSlice;
export const {toggleGptSearch,addGptMovieResult}=gptSlice.actions;