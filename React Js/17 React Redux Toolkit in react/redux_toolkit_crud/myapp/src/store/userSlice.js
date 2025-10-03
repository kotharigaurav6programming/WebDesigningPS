import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userArray : [],
    message : '',
    status : '',
    loggedInEmail : '',
    activeUser : {}
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
                state.loggedInEmail = action.payload.email;
            }
            else {
                state.status=403;
                state.message = "Invalid Email or Password"    
                console.log("in false of login");
                
            }
        },
        activeUser : (state)=>{
            state.activeUser = state.userArray.find((obj)=>{
                if(obj.email == state.loggedInEmail)
                    return obj;
            });

        },
        updateUser : (state,action)=>{
            var index;
            for(var i=0;i<state.userArray.length;i++){
                if(state.userArray[i].email==action.payload.email){
                        index=i;
                        break;
                }
            }
            state.userArray.splice(index,1,action.payload);
            state.userArray = [...state.userArray];
            state.message = "User Updated Successfully" 
        },
        deActivateProfile : (state)=>{
            var index;
            for(var i=0;i<state.userArray.length;i++){
                if(state.userArray[i].email==state.loggedInEmail){
                        index=i;
                        break;
                }
            }
            state.userArray.splice(index,1);
            state.userArray = [...state.userArray];
        },
        resetMessage : (state)=>{
            state.message = '';
        }
    }
});

export const {addUser,resetMessage,loginUser,activeUser,updateUser,deActivateProfile} = userSlice.actions;
export default userSlice.reducer;