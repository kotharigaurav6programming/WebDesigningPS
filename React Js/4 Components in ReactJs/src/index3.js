import React from 'react';
import {createRoot} from 'react-dom/client';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';

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