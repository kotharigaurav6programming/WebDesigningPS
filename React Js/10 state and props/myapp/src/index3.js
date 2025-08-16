// example of props in react
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function FunctionalComponent(props){
    // console.log(props);    
  return (<>
    <h2>This is my Functional component</h2>
    <p>
      <b>Name : </b>{props.obj.name} <br/>
      <b>Address : </b>{props.obj.address} <br/>
      <b>Salary : </b>{props.obj.salary} <br/>
    </p>
  </>);
}
class ClassComponent extends React.Component{  
  render(){
    // console.log("this : ",this);
    // console.log("this.props : ",this.props);
  return (<>
      <h2>This is my Class component</h2>
      <p>
        <b>Name : </b>{this.props.obj.name} <br/>
        <b>Address : </b>{this.props.obj.address} <br/>
        <b>Salary : </b>{this.props.obj.salary} <br/>
      </p>
    </>);
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <FunctionalComponent obj={{name:"Andrew Anderson",salary:2345,address:"Indore"}} />
  <ClassComponent obj={{name:"Andrew Anderson",salary:2345,address:"Indore"}} />
</>);



