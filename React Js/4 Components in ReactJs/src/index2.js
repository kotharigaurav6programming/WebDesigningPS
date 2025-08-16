import React from 'react';
import {createRoot} from 'react-dom/client';

class Header extends React.Component{
    render(){
        return (<>
            <h2>Header Component</h2>
            <p>This is an example of Header Component</p>
        </>);
    }
}
class Navbar extends React.Component{
    render(){
        return (<>
            <h2>Navbar Component</h2>
            <p>This is an example of Navbar Component</p>
        </>);
    }
}
class Banner extends React.Component{
    render(){
        return (<>
            <h2>Banner Component</h2>
            <p>This is an example of Banner Component</p>
        </>);
    }
}
class Footer extends React.Component{
    render(){
        return (<>
            <h2>Footer Component</h2>
            <p>This is an example of Footer Component</p>
        </>);
    }
}
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