import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/NavbarDemo.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SliderDemo from './components/SliderDemo.js';
import ContentDemo from './components/ContentDemo.js';
import BoxDemo from './components/BoxDemo.js';
import SectionDemo from './components/SectionDemo.js';
import FooterDemo from './components/FooterDemo.js';
function App(){
    return (<>
        <Navbar/>
        <SliderDemo/>
        <ContentDemo/>
        <BoxDemo/>
        <SectionDemo/>
        <FooterDemo/>
    </>);
}
createRoot(document.getElementById("root")).render(<App/>);