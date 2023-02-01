import { createSlice } from "@reduxjs/toolkit";
export const counterSlice  = createSlice({

    name : "counter" , 
    initialState : {
        value : 0 ,
    } ,
    reducers : {
        increment : (state,actions)=>{
              state.value +=1 ; 
              console.log(actions)
        },
        decrement : (state ,actions) =>{
            state.value -= 1  ; 
            console.log(actions)
        }
    } ,  extraReducers :{
            "counter/increment" :(state) =>{
                state.time++ ; 
                console.log()
            }
         }

}) ; 

export const {increment , decrement } = counterSlice.actions ; 
export default counterSlice.reducer ; 