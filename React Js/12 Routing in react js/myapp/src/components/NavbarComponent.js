import React from 'react';
import { Link } from 'react-router-dom';
function NavbarComponent(){
    return (<>
        <div style={{backgroundColor:"black",color:"white",height:"33px",padding:"10px"}}>
            <Link to='/' style={{color:"white",fontSize:"20px",textDecoration:"none"}}>Home</Link> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/about' style={{color:"white",fontSize:"20px",textDecoration:"none"}}>About</Link> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/contact' style={{color:"white",fontSize:"20px",textDecoration:"none"}}>Contact</Link>
        </div>
    </>);
}
export default NavbarComponent;