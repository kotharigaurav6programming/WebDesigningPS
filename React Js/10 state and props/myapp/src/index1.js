// example of props in react
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function FunctionalComponent(props){
  console.log("props : ",props);
  return (<>
    <h2>This is my Functional component</h2>
    <p>
      <b>Name : </b>{props.name} <br/>
      <b>Age : </b>{props.age} <br/>
      <b>Salary : </b>{props.salary} <br/>
    </p>
  </>);
}
class ClassComponent extends React.Component{  
  render(){
    console.log("this : ",this);
    console.log("this.props : ",this.props);

  return (<>
      <h2>This is my Class component</h2>
      <p>
        <b>Name : </b>{this.props.name} <br/>
        <b>Age : </b>{this.props.age} <br/>
        <b>Salary : </b>{this.props.salary} <br/>
      </p>
    </>);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <FunctionalComponent name="Andrew Anderson" age="25" salary={12345}/>
  <ClassComponent name="Andrew Anderson" age="25" salary={12345}/>
</>);

