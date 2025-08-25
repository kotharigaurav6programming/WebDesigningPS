import React, { useState } from 'react';
function App(){
  const [userObj,setUserObj] = useState({});
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
      setStudentArray([...studentArray,userObj]);
    event.target.reset();
  }
    return (<div>
      <div style={{width:"25%",float:"left",backgroundColor:"black",color:"white",height:"445px"}}>
      <form onSubmit={handleSubmit}>
          <h2>Fill Details</h2>
          <input
            type="text"
            name="username"
            id="username"
            placeholder='Enter Username'
            onChange={getData}
          /> <br/>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Enter Email'
            onChange={getData}
          /> <br/>
          <input
            type="password"
            name="password"
            id="password"
            placeholder='Enter Password'
            onChange={getData}
          /> <br/>
          <input
            type="text"
            name="address"
            id="address"
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
      <div style={{width:"75%",float:"left",backgroundColor:"teal",height:"445px"}}>
        <table border={1} cellSpacing={0} cellPadding={8} align="center">
          <caption><h2>Student Details</h2></caption>
          <tr>
            <th>S.No</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
          </tr>
          {
            studentArray.map((student,index)=>{
              return(<tr>
                <td>{index+1}</td>
                <td>{student.username}</td>
                <td>{student.email}</td>
                <td>{student.password}</td>
                <td>{student.address}</td>
              </tr>);
            })
          }
        </table>
      </div>
    </div>);
}

export default App;


