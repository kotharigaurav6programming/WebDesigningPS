import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

const initialState = 0;
const reducer = (state,action)=>{
  switch(action){
    case 'increment' : return state+1;
    case 'decrement' : return state-1;
    case 'reset' : return 0;
    default : return initialState;
  }
}
function App() {
  const [count,dispatch] = useReducer(reducer,initialState); 
  return (<>
    <h1>Count : {count}</h1>
    <button onClick={()=>{dispatch('increment')}}>increment</button>
    <button onClick={()=>{dispatch('decrement')}}>decrement</button>
    <button onClick={()=>{dispatch('reset')}}>reset</button>
  </>);
}

export default App;
