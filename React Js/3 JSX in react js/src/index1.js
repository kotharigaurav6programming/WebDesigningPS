import React from 'react';
import {createRoot} from 'react-dom/client';

const message = <h2>This is an example of Python</h2>
const content = <del>{message}</del>
createRoot(document.getElementById("root")).render(content);