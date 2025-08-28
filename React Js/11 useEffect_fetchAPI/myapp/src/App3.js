import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
 
  // useEffect(()=>{
  //  var timer = setInterval(()=>{
  //   setCount(count+1);
  //  },1000);
  //  return ()=>clearInterval(timer); 
  // });

   useEffect(()=>{
   var timer = setInterval(()=>{
    setCount(count+1);
   },1000);
   return ()=>clearInterval(timer); 
  },[]);

  return (<>
    <h1>This is an example of React</h1>
    <h1>Count : {count}</h1>
  </>);
}

export default App;
