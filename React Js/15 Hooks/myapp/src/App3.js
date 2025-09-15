// prop drilling
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [fname,setFname] = useState('Andrew');
  const [lname,setLname] = useState('Anderson');
  return (<>
    <AClass fname={fname} lname={lname}/>
  </>);
}
function AClass(props){
  return (<>
    <BClass fname={props.fname} lname={props.lname}/>
  </>);
}
function BClass(props){
  return (<>
    <CClass fname={props.fname} lname={props.lname}/>
  </>);
}
function CClass(props){
  return (<>
    <h1>FirstName : {props.fname}</h1>
    <h1>LastName : {props.lname}</h1>
  </>);
}

export default App;
