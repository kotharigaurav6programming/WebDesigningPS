import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { activeUser, updateUser } from "../store/userSlice.js";
function UpdateProfileComponent(){
    const userStoreObj = useSelector(state=> state.userSlice);
console.log("userStoreObj.activeUser : ",userStoreObj.activeUser);

    const [userObj,setUserObj] = useState({});
console.log("userObj : ",userObj);

    const dispatch = useDispatch();
    const navigate =  useNavigate();
    useEffect(()=>{
        dispatch(activeUser());
        setUserObj({
            ...userStoreObj.activeUser
        });
    },[userStoreObj.activeUser]);
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
         dispatch(updateUser(userObj));
         navigate('/profile');
        event.target.reset();
    }
    return (<>
        <h1>Update Profile</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username"
                onChange={getData}
                value={userObj.username}
                required
            /><br/>
             <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                 onChange={getData}
                value={userObj.email}
                readOnly
                required
            /><br/>
            <input
                type="text"
                id="password"
                name="password"
                placeholder="Enter Password"
                value={userObj.password}
                 onChange={getData}
                required
            /><br/>
            <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter Address"
                value={userObj.address}
                onChange={getData}
                required
            /><br/>
            <input
                type="submit"
                value="Update"
            /><br/>
            <input
                type="reset"
                value="Reset"
            /><br/>            
        </form>
        
    </>);
}

export default UpdateProfileComponent;