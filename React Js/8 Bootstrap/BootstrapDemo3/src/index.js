import React from 'react';
import {createRoot} from 'react-dom/client';
import NavbarComponent from './components/NavbarComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderComponent from './components/SliderComponent.js';
import CardComponent from './components/CardComponent.js';

function App(){
    return (<>
        <NavbarComponent/>
        <SliderComponent/>
        <CardComponent/>
    </>);
}
createRoot(document.getElementById("root")).render(<App/>);