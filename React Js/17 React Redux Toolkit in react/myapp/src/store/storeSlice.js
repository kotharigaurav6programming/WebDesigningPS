import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counterTitle : "Counter",
    count:0,
    tagLine : "This is an example of React Toolkit"
}

const storeSlice = createSlice({
    name:"storeSlice",
    initialState,
    reducers : {
        increment : (state)=>{
            state.count += 1;
        },
        decrement : (state)=>{
            state.count -= 1;
        },
        reset : (state)=>{
            state.count = 0;
        },
        tagLineFun : (state,action)=>{
           // console.log(action.payload);
            state.tagLine = action.payload.tagline;
        }
    }
});

export const {increment,decrement,reset,tagLineFun} = storeSlice.actions;
export default storeSlice.reducer;