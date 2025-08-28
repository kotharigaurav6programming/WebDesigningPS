import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  // runs n no. of times

  // useEffect(()=>{
  //   console.log("useEffect executes...");
  //   setCount(count+1);
  // });

  // runs only once

  // useEffect(()=>{
  //   console.log("useEffect executes...");
  //   setCount(count+1);
  // },[]);

  // runs multiple times as state change
  
  useEffect(()=>{
    console.log("useEffect executes...");
    setCount(count+1);
  },[count]);

  return (<>
    <h1>This is an example of React</h1>
    <h1>Count : {count}</h1>
  </>);
}

export default App;
