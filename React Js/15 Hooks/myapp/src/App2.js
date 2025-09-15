import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

const initialState = {
  count:0
};
const reducer = (state,action)=>{
  switch(action.type){
    case 'increment' : return {count:state.count+action.value};
    case 'decrement' : return {count:state.count-action.value};
    case 'reset' : return {count:action.value};
    default : return initialState;
  }
}
function App() {
  const [state,dispatch] = useReducer(reducer,initialState); 
  return (<>
    <h1>Count : {state.count}</h1>
    <button onClick={()=>{dispatch({type:'increment',value:1})}}>increment</button>
    <button onClick={()=>{dispatch({type:'decrement',value:1})}}>decrement</button>
    <button onClick={()=>{dispatch({type:'reset',value:0})}}>reset</button>
  </>);
}

export default App;
