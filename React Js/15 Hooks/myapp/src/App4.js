// context API (createContext, useContext)
import logo from './logo.svg';
import './App.css';
import { createContext, useContext, useState } from 'react';
const context = createContext(null);
function App() {
  const [fname,setFname] = useState('Andrew...');
  const [lname,setLname] = useState('Anderson...');
  return (<context.Provider value={{fname,lname}}>
    <AClass/>
  </context.Provider>);
}
function AClass(){
  return (<>
    <BClass/>
  </>);
}
function BClass(){
  return (<>
    <CClass/>
  </>);
}
function CClass(){
    const {fname,lname} = useContext(context);
  return (<>
    <h1>FirstName : {fname}</h1>
    <h1>LastName : {lname}</h1>
  </>);
}

export default App;

