import userSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
const appStore=configureStore(
    {
        reducer:{
            user:userSlice.reducer,
        },
    }
)
export default appStore;