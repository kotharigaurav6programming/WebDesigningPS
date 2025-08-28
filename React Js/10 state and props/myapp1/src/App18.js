import React, { useState } from 'react';
import DisplayFunNew from './DisplayFunNew.js';
function App(){
  const [userObj,setUserObj] = useState({});
  const [index,setIndex] = useState(-1);
  const [studentArray,setStudentArray] = useState([]);
  const getData = (event)=>{
    const {name,value} = event.target;
    setUserObj({
      ...userObj,
      [name]:value
    });
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
      if(index==-1)
        setStudentArray([...studentArray,userObj]);
      else{
        studentArray.splice(index,1,userObj);
        setStudentArray([...studentArray]);
        setIndex(-1);
      }
      event.target.reset();
      setUserObj({
        username:'',
        email:'',
        password:'',
        address:''
      });
  }
  const updateData = (obj)=>{
    setUserObj(obj.student);
    setIndex(obj.index);
  }
  const deleteData = (index)=>{
    studentArray.splice(index,1);
    setStudentArray([...studentArray]);
  }
    return (<div>
      <div style={{width:"25%",float:"left",backgroundColor:"black",color:"white",height:"445px"}}>
      <form onSubmit={handleSubmit}>
          <h2>Fill Details</h2>
          <input
            type="text"
            name="username"
            id="username"
            value={userObj.username}
            placeholder='Enter Username'
            onChange={getData}
          /> <br/>
          <input
            type="email"
            name="email"
            id="email"
            readOnly = { index==-1 ? "" : "readOnly" } 
            value={userObj.email}
            placeholder='Enter Email'
            onChange={getData}
          /> <br/>
          <input
            type="password"
            name="password"
            id="password"
            value={userObj.password}
            placeholder='Enter Password'
            onChange={getData}
          /> <br/>
          <input
            type="text"
            name="address"
            id="address"
            value={userObj.address}
            placeholder='Enter Address'
            onChange={getData}
          /> <br/>
          <input
            type="submit"
            value="Submit"
          />
          <input
            type="reset"
            value="Reset"
          /> <br/>
      </form>
      </div>
      <DisplayFunNew student={studentArray} update={updateData} delete={deleteData}/>
    </div>);
}

export default App;


