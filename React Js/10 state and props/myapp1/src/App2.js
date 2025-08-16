import React from 'react';
class App extends React.Component {
  state={
    name:"Andrew Anderson"
  }
  stateDemo={
    name:"Peter Parker"
  }
  render(){
      console.log(this);
      return (<>
        <h2>State Name : {this.state.name}</h2>
        <h2>StateDemo Name : {this.stateDemo.name}</h2>
        <button onClick={()=>{this.setState({name:"Jack Jackson"})}}>Change Name</button>
      </>);
  }
}

export default App;
