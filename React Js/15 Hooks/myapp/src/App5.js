// example showing the conncept of useCallback
import './App.css';
import { useCallback, useState } from 'react';
function App() {
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [sum,setSum] = useState(0);
  // var r = function(){
  //   console.log("hello");
  // }
  // r();
  
  const res = useCallback(()=>{
    console.log("executes");
    
    console.log("num1 : "+num1);
    console.log("num2 : "+num2);
    setSum(parseInt(num1)+parseInt(num2));
  },[num1,num2]);
  return (<>
    <input
      type="text"
      placeholder='Enter First number'
      name="num1"
      id="num1"
      onChange={(event)=>{
        setNum1(event.target.value);
      }}
      required
    /> <br/>
    <input
      type="text"
      placeholder='Enter Second number'
      name="num2"
      id="num2"
      onChange={(event)=>{
        setNum2(event.target.value);
      }}
      required
    /> <br/>
    <input
      type="submit"
      value="Sum"
      onClick={res}
    /><input
      type="reset"
      value="Reset"
    /> <br/> 
    <br/>
    {"Sum : "+sum}
  </>);
}

export default App;

