import {configureStore} from "@reduxjs/toolkit"
import { customReducer } from "./Reducer";


const store = configureStore({
reducer:{
    custom:customReducer, //one store with  reducer named custom 
},
});

export default store;