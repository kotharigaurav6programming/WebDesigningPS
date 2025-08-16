import React from 'react';
import {createRoot} from 'react-dom/client';
import Footer,{ Banner, Header, Navbar } from './test1.jsx';

class MyComponent extends React.Component{
    render(){
        return (<>
            <Header/>
            <Navbar/>
            <Banner/>
            <Footer/>
        </>);
    }
}

createRoot(document.getElementById("root")).render(<MyComponent/>);