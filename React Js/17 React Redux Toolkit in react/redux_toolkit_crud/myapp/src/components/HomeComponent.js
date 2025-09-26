import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetMessage } from "../store/userSlice.js";
function HomeComponent(){
    localStorage.setItem("navShow","home");
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(resetMessage());
    });
    return (<>
    <h2>Home Component</h2>
    </>);
}

export default HomeComponent;