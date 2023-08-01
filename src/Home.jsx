import React from 'react'
import { useDispatch,useSelector } from 'react-redux'


export const Home = () => {
    const value = 29;
    const dispatch =  useDispatch();
    const {c} = useSelector(state => state.custom)


    const addBtn = () =>{
      dispatch({
        type:"increment",
      });
    }
    const subBtn = () =>{
      dispatch({
        type:"decrement",
      });
    }


  return(
    <div>
        <h1>{c}</h1>
        <button onClick={addBtn}>Increment</button>
        <button onClick={subBtn}>decrement</button>
    </div>
  )
}
