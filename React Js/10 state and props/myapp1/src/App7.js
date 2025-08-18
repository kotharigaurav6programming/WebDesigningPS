import React from 'react';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count:0,
      heading  : "Counter"
    }
    this.increment = this.increment.bind(this);
  }
  increment(){
    this.setState({count:this.state.count+1});
  }  
  decrement=()=>{
    this.setState({count:this.state.count-1});
  }  
  reset(){
    this.setState({count:0});
  }
  changeHeading = ()=>{
    this.setState({heading:"New Counter"});
  }
  render(){
      return (<>
        <h2>{this.state.heading} : {this.state.count}</h2>
        {/* <button onClick={()=>{this.increment()}}>Increment</button> */}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={()=>{this.reset()}}>Reset</button>
        <button onClick={this.changeHeading}>Change Title</button>
      </>);
  }
}

export default App;


