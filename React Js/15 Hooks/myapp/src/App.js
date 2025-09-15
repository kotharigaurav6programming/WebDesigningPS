// example showing the conncept of useCallback
import './App.css';
import { memo, useMemo, useState } from 'react';
const Memoized = memo((props)=>{
  console.log("executes Memoized");
  return `Hello ${props.fname} ${props.lname}`;
})

function UnMemoized(props){
  console.log("executes Unmemoized");
  return `Hello ${props.fname} ${props.lname}`;
}
function App() {
  const [count,setCount] = useState(0);
  const [fname,setFname] = useState("Andrew");
  const [lname,setLname] = useState("Anderson");
  const memoizedComponent = useMemo(()=><Memoized fname={fname} lname={lname}/>);  
  return (<>
    <h1>count : {count}</h1>
    <button onClick={()=>{
      setCount(count+1);
    }}>Count</button>

    <h3>Memoized Component</h3>
    {memoizedComponent}
    
    <h3>UnMemoized Component</h3>
    <UnMemoized fname={fname} lname={lname}/>
  </>);
}

export default App;

