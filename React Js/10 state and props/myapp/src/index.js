// example of props in react
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class ClassComponent extends React.Component{  
  render(){
  return (<>
      <ChildComponent dataHandle={this.props.obj}/>
    </>);
  }
}
class ChildComponent extends React.Component{
  render(){
    return (<>
       <h2>This is my Child Class component</h2>
      <table border={1} cellSpacing={0} cellPadding={8}>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Address</th>
        <th>Salary</th>
      </tr>
    {
      this.props.dataHandle.map((entry,index)=>{
        return(<tr>
          <td>{index+1}</td>
          <td>{entry.name}</td>
          <td>{entry.address}</td>
          <td>{entry.salary}</td>
        </tr>)
      })
    }    
    </table>
    </>);
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
// array of object starts
  var data = [
    {
      name : "Andrew Anderson",
      address : "Indore, Madhya Pradesh",
      salary : 2345
    },{
      name : "Peter Parker",
      address : "Indore, Madhya Pradesh",
      salary : 5432
    },{
      name : "Mathew Math",
      address : "Bhopal, Madhya Pradesh",
      salary : 9090
    },{
      name : "Jack Jackson",
      address : "Jabalpur, Madhya Pradesh",
      salary : 3223
    },{
      name : "Simon Sim",
      address : "Indore, Madhya Pradesh",
      salary : 9999
    }
  ];
// array of object ends

root.render(<>
  <ClassComponent obj={data} />
</>);



