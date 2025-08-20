import React from 'react';
class App extends React.Component{
  state={
    obj:{},
    studentArray:[]
  }
  getData = (event)=>{
    const {name,value} = event.target;
    this.setState({
      obj : {
        ...this.state.obj,
        [name]:value
      }
    });
  }
  handleSubmit = (event)=>{
    event.preventDefault();
      this.setState({
        studentArray:[...this.state.studentArray,this.state.obj]
      });
    event.target.reset();
  }
  render(){
    return (<div>
      <div style={{width:"25%",float:"left",backgroundColor:"black",color:"white",height:"445px"}}>
      <form onSubmit={this.handleSubmit}>
          <h2>Fill Details</h2>
          <input
            type="text"
            name="username"
            id="username"
            placeholder='Enter Username'
            onChange={this.getData}
          /> <br/>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Enter Email'
            onChange={this.getData}
          /> <br/>
          <input
            type="password"
            name="password"
            id="password"
            placeholder='Enter Password'
            onChange={this.getData}
          /> <br/>
          <input
            type="text"
            name="address"
            id="address"
            placeholder='Enter Address'
            onChange={this.getData}
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
            this.state.studentArray.map((student,index)=>{
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
}
export default App;


