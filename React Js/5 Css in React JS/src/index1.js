import React from 'react';
import {createRoot} from 'react-dom/client';

function MyComponent(){

    // return (<div style={{backgroundColor:"#234567",color:"white"}}>
    //     <h1>This is an example of CSS in React</h1>
    // </div>);

    /*
    const myStyle = {
            backgroundColor:"#888567",
            color:"white"
    };
    return (<div style={myStyle}>
        <h1>This is an example of CSS in React</h1>
    </div>);
    */

    const myStyle = {
            style1:{
                backgroundColor:"#888567",
                color:"white"
            },
            style2:{
                backgroundColor:"#222267",
                color:"white"
            }
    };
    return (<div>
        <h1 style={myStyle.style1}>This is an example of CSS in React</h1>
        <h1 style={myStyle.style2}>This is an example of CSS in React</h1>
    </div>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);