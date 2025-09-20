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

    }
});

export default storeSlice.reducer;