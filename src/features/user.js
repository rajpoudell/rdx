import { createSlice } from "@reduxjs/toolkit";

export const userSlice =  createSlice({
    name: "user", //same as name of thefdf state
    initialState: {value: { name: "Raj", age:20, email: "rajpoudel@gmail.com"} }, //initial state is own defining its
    reducers: {
        login: (state ,action) =>{
            state.value = action.payload;

        },
    }, 
});

export default userSlice.reducer;