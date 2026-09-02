import { configureStore } from "@reduxjs/toolkit";
import searchSlice from './Features/searchSlice'


export const store = configureStore({
    reducer:{
        search:searchSlice
    }
})