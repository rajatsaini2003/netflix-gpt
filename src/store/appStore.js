import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import { configureStore } from "@reduxjs/toolkit";
const appStore=configureStore(
    {
        reducer:{
            user:userSlice.reducer,
            movies:movieSlice.reducer
        },
    }
)
export default appStore;