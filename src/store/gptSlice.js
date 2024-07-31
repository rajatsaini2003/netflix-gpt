import { createSlice } from "@reduxjs/toolkit";
const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showgptSearch:true
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.showgptSearch=!state.showgptSearch
        }
    }
})
export default gptSlice;
export const {toggleGptSearch}=gptSlice.actions;