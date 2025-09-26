import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userArray : [],
    message : '',
    status : ''
}

const userSlice = createSlice({
    name : "userSlice",
    initialState,
    reducers : {
        addUser : (state,action)=>{
           state.userArray = [...state.userArray,action.payload];             
        //    console.log(state.userArray);
           state.message = "User Added Successfully" 
        },
        loginUser : (state,action)=>{
            const res = state.userArray.find((obj)=>{
                return obj.email==action.payload.email && obj.password==action.payload.password;
            });
            //console.log("login data : ",res);
            if(res){
                state.status=200;
            }
            else {
                state.status=403;
                state.message = "Invalid Email or Password"    
            }
        },
        resetMessage : (state)=>{
            state.message = '';
        }
    }
});

export const {addUser,resetMessage,loginUser} = userSlice.actions;
export default userSlice.reducer;