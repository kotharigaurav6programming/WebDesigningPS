import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProfileComponent(){
    localStorage.setItem("navShow","profile");
    const userStateObj = useSelector(state=>state.userSlice);
    const navigate = useNavigate();
    {console.log("status on profile : ",userStateObj.status);}
    useEffect(()=>{
        if(userStateObj.status==403 || userStateObj.status==500){
            navigate('/login');
            console.log("gets entry in if of profile component");
        }
    },[]);
    return(<>
        <h1>Profile Component</h1>
        <h2>{userStateObj.message}</h2>
    </>);
}

export default ProfileComponent;