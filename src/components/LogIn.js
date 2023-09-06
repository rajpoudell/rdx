 import React from 'react'
 import { useDispatch } from 'react-redux'
 import {login} from "../features/user"
 
 const LogIn = () => {
  const dispatch  = useDispatch();
   return (
     <div>
        <button onClick={() => {

          dispatch(login({
          name: "Raj", 
          age:20, 
          email: "rajpoudel@gmail.com"}));
          
          }}>Log In</button>
    </div>
   )
 }
  
 export default LogIn