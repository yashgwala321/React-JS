import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './Features/searchSlice'
import collectionReducer from '../Redux/Features/collectionSlice'


export const store = configureStore({
    reducer:{
        search:searchReducer,
        collection:collectionReducer
     }
})