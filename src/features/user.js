import { createSlice } from "@reduxjs/toolkit";

export const userSlice =  createSlice({
    name: "user", //same as name of the default state
    initialState: {value:
         { name: "",
          age:0 ,
        email: ""}
         }, //initial state is own defining its
    reducers: {
        login: (state ,action) =>{
            state.value = action.payload;

        },
    }, 
});
export const {login} = userSlice.actions;
export default userSlice.reducer;