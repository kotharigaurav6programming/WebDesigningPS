import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
function MyComponent(){
    return (<div>
        <h1 id="style1">This is an example of CSS in React</h1>
        <h1 id="style2">This is an example of CSS in React</h1>
    </div>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);