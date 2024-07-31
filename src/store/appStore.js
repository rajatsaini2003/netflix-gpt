import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";

const appStore=configureStore(
    {
        reducer:{
            user:userSlice.reducer,
            movies:movieSlice.reducer,
            gpt:gptSlice.reducer,
            config:configSlice.reducer
        }
    }
)
export default appStore;