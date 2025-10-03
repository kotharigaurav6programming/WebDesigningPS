import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deActivateProfile } from "../store/userSlice.js";
function Navbar(){
    const [menuItem,setMenuItem] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deActivate = ()=>{
        dispatch(deActivateProfile());
        alert("Profile DeActivate Successfully");
        navigate('/login');
    }
    const logout = ()=>{
        alert("Profile Logout Successfully");
        navigate('/login');
    }

    useEffect(()=>{
        let x = setInterval(()=>{
            var navShow = localStorage.getItem("navShow");
        if(navShow=="home"){
            setMenuItem(<div style={{height:"35px",backgroundColor:"black",padding:"10px"}}>
                <Link style={{color:"white",textDecoration:"none",marginLeft:"50px",fontSize:"20px"}} to='/'>Home</Link>
                <Link style={{color:"white",textDecoration:"none",marginLeft:"50px",fontSize:"20px"}} to='/login'>Login</Link>
                <Link style={{color:"white",textDecoration:"none",marginLeft:"50px",fontSize:"20px"}} to='/registration'>Registration</Link>
            </div>);
        }else if(navShow=="login"){
            setMenuItem(<div style={{height:"35px",backgroundColor:"black",padding:"10px"}}>
                <Link style={{color:"white",textDecoration:"none",marginLeft:"50px",fontSize:"20px"}} to='/'>Home</Link>
                <Link style={{color:"white",textDecoration:"none",marginLeft:"50px",fontSize:"20px"}} to='/registration'>Registration</Link>
            </div>);
        }else if(navShow=="registration"){
            setMenuItem(<div style={{height:"35px",backgroundColor:"black",padding:"10px"}}>
                <Link style={{color:"white",textDecoration:"none",marginLeft:"50px",fontSize:"20px"}} to='/'>Home</Link>
                <Link style={{color:"white",textDecoration:"none",marginLeft:"50px",fontSize:"20px"}} to='/login'>Login</Link>
            </div>);
        }else if(navShow=="profile"){
            setMenuItem(<div style={{height:"35px",backgroundColor:"black",padding:"10px"}}>
                <Link style={{color:"white",textDecoration:"none",marginLeft:"50px",fontSize:"20px"}} to='/'>Home</Link>
                <Link style={{color:"white",textDecoration:"none",marginLeft:"50px",fontSize:"20px"}} to='/viewAllUsers'>View All Users</Link>
                <Link style={{color:"white",textDecoration:"none",marginLeft:"50px",fontSize:"20px"}} to='/updateProfile'>Update Profile</Link>
                <span onClick={deActivate} style={{color:"white",textDecoration:"none",marginLeft:"50px",fontSize:"20px"}}>DeActivate A/C</span>
                <span onClick={logout} style={{color:"white",textDecoration:"none",marginLeft:"50px",fontSize:"20px"}}>Logout</span>
            </div>);
        }
        },10);

        return ()=> clearInterval(x);
    },[]);
    return (<div>
        {menuItem}
    </div>);
}
export default Navbar;