import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import styled from 'styled-components';
function MyComponent(){
    const MyParagraph = styled.p`
        font-family:candara;
        background-color:olive;
        color:white;
    `
    return (<MyParagraph>
        <h1>This is an example of CSS in React</h1>
    </MyParagraph>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);