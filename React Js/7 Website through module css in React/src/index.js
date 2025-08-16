import React from 'react';
import {createRoot} from 'react-dom/client';
// import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import Content from './components/Content.js';
import Marquee from './components/Marquee.js';
import Box from './components/Box.js';
import Newsletter from './components/Newsletter.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Header from './components/HeaderComponent/Header.js';
function App(){
    return(<div id="container">
        <Header/>
        <Navbar/>
        <Banner/>
        <Content/>
        <Marquee/>
        <Box/>
        <Newsletter/>
        <About/>
        <Contact/>
        <Footer/>
    </div>);
}
createRoot(document.getElementById("root")).render(<App/>);