import React, { useRef, useState } from 'react';
function App(){
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const address = useRef();
  
  const [studentArray,setStudentArray] = useState([]);

  const handleSubmit = (event)=>{
    event.preventDefault();
      const obj = {
        username:username.current.value,
        email:email.current.value,
        password:password.current.value,
        address:address.current.value
      };
      setStudentArray([...studentArray,obj]);
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
            ref={username} 
            // onChange={(event)=>{
            //   setUsername(event.target.value);
            // }}
          /> <br/>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Enter Email'
            ref={email}
            // onChange={(event)=>{
            //   setEmail(event.target.value);
            // }}
          /> <br/>
          <input
            type="password"
            name="password"
            id="password"
            placeholder='Enter Password'
            ref={password}
            // onChange={(event)=>{
            //   setPassword(event.target.value);
            // }}
          /> <br/>
          <input
            type="text"
            name="address"
            id="address"
            placeholder='Enter Address'
            ref={address}
            // onChange={(event)=>{
            //   setAddress(event.target.value);
            // }}
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


