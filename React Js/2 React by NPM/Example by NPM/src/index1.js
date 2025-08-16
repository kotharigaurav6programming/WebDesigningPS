import React from 'react';
import {createRoot} from 'react-dom/client';

/*
var rootElement = document.getElementById("root");
var content = <h1>This is an example of React Js</h1>
var root = createRoot(rootElement);
root.render(content);
*/

/*
var content = <h1>This is an example of React Js..</h1>
var root = createRoot(document.getElementById("root"));
root.render(content);
*/

createRoot(document.getElementById("root")).render(<h1>This is an example of React Js..!!!</h1>);
