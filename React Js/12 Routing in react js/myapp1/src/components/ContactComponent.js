import React from 'react';
import { Link, Outlet } from 'react-router-dom';
function ContactComponent(){
    return (<div style={{marginLeft:"170px",width:"130px",lineHeight:"30px",backgroundColor:"black",color:"white",height:"70px",padding:"10px"}}>
        <Link to='/contact/contact1' style={{color:"white",textDecoration:"none"}}>ContactOption1</Link> <br/> <hr/>
        <Link to='/contact/contact2' style={{color:"white",textDecoration:"none"}}>ContactOption2</Link>
        <Outlet/>
    </div>);
}
export default ContactComponent;