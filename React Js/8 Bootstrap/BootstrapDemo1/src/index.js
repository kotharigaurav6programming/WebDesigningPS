import React from 'react';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App(){
    return (<>
    <div className='container-fluid' style={{backgroundColor:"dodgerblue",color:"white"}}>
        <h1>Welcome To Bootstrap</h1>
        <p>This is an example of Bootstrap in React Js This is an example of Bootstrap in React Js This is an example of Bootstrap in React Js This is an example of Bootstrap in React Js This is an example of Bootstrap in React Js This is an example of Bootstrap in React Js This is an example of Bootstrap in React Js  </p>
    </div>

    <div className='container' style={{marginTop:"-16px",backgroundColor:"crimson",color:"white"}}>
        <h1>Welcome To Bootstrap</h1>
        <p>This is an example of Bootstrap in React Js This is an example of Bootstrap in React Js This is an example of Bootstrap in React Js This is an example of Bootstrap in React Js This is an example of Bootstrap in React Js This is an example of Bootstrap in React Js This is an example of Bootstrap in React Js  
            <button className='btn btn-success btn-lg'>Get Information</button>
        </p>
    </div>
    </>);
}

createRoot(document.getElementById("root")).render(<App/>);