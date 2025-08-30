 import { useEffect } from 'react';
 const name = "Thomas"
 const printName = (value) => {
    console.log(value);
 };
 const App = () => {
    useEffect(() => {      
        printName(name);
    }, [name, printName]);
 
    return <p>UseEffect!</p>;
 };
 
 export default App;
