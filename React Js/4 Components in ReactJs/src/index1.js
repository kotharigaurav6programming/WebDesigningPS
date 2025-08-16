import React from 'react';
import {createRoot} from 'react-dom/client';

class MyComponent extends React.Component{
    render(){
        return (<>
            <h2>This is an example of Class Component</h2>
        </>);
    }
}

createRoot(document.getElementById("root")).render(<MyComponent/>);