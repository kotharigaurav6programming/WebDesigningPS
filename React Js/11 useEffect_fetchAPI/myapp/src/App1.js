import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(()=>{
    console.log("useEffect executes...");
  });
  return (<>
    <h1>This is an example of React</h1>
  </>);
}

export default App;
