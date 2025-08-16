import React from 'react';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count:0,
      heading  : "Counter"
    }
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
        <h2>Count : {this.state.count}</h2>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Count</button>
      </>);
  }
}

export default App;


