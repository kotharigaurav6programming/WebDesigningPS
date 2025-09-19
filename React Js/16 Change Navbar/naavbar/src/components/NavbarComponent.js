import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Navbar(){
    const [menuItem,setMenuItem] = useState();
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
        }
        },10);

        return ()=> clearInterval(x);
    },[]);
    return (<div>
        {menuItem}
    </div>);
}
export default Navbar;