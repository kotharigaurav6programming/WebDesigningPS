import React, { useState } from 'react';
function App(){
  const [count,setCount] = useState(0);
  const [heading,setHeading] = useState('Count');
  function increment(){
    setCount(count+1);
  }
  var decrement = ()=>{
    setCount(count-1);
  }
  function reset(){
    setCount(0);
  }
  function changeTitle(){
    setHeading("New Counter");
  }

  return(<>
        <h2>{heading} : {count}</h2>
        <button onClick={()=>{increment()}}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={()=>{changeTitle()}}>Change Title</button>      
  </>);
}
export default App;


