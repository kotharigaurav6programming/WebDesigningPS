import React, { useState } from 'react';
function App(){
  const [count,setCount] = useState(0);
  const [heading,setHeading] = useState('Count');

  return(<>
        <h2>{heading} : {count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        <button onClick={()=>{setHeading('New Count')}}>Change Title</button>
  </>);
}
export default App;


