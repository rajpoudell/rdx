import {createReducer} from "@reduxjs/toolkit"

const initialState = {
    c:0,
}

export const customReducer =  createReducer(initialState,{
    increment:(state) =>{ // action parameter is optional
        state.c +=1;
    },
    incrementByValue:(state,action) =>{
        state.c +=1;
        state.c +=action.payload;

    },
    decrement:(state) =>{ //action parameter with state is optional
        state.c -=1;
    },
})