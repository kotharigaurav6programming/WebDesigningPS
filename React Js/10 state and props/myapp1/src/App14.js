import React from 'react';
import Display from './DisplayNew.js';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      obj:{},
      studentArray:[],
      index:-1
    }
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
      if(this.state.index==-1){
        this.setState({
          studentArray:[...this.state.studentArray,this.state.obj]
        });
      }else{
        this.state.studentArray.splice(this.state.index,1);
        this.state.studentArray.splice(this.state.index,0,this.state.obj);
        this.setState({
          studentArray:[...this.state.studentArray],
          index:-1
        })
      }

    event.target.reset();
    this.setState({
      obj:{
        username:'',
        email:'',
        password:'',
        address:''
      }
    });
  }
  deleteData = (index)=>{
    console.log("received index : "+index);
    this.state.studentArray.splice(index,1);
    this.setState({
      studentArray : [...this.state.studentArray]
    });
  }
  updateData = (studentObj)=>{
      console.log("studentObj.student : ",studentObj.student);
      console.log("studentObj.index : ",studentObj.index); 
      this.setState({
        obj:studentObj.student,
        index:studentObj.index
      });
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
            required
            value={this.state.obj.username}
            placeholder='Enter Username'
            onChange={this.getData}
          /> <br/>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={this.state.obj.email}
            placeholder='Enter Email'
            onChange={this.getData}
          /> <br/>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={this.state.obj.password}
            placeholder='Enter Password'
            onChange={this.getData}
          /> <br/>
          <input
            type="text"
            name="address"
            id="address"
            required
            value={this.state.obj.address}
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
      <Display studentData={this.state.studentArray} update={this.updateData} delete={this.deleteData}/>
    </div>);
  }
}
export default App;


