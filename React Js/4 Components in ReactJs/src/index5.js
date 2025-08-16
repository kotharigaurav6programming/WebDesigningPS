import React from 'react';
import {createRoot} from 'react-dom/client';
import Footer, { Banner, Header, Navbar } from './test.jsx';

function MyComponent (){
        return (<>
            <Header/>
            <Navbar/>
            <Banner/>
            <Footer/>
        </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);