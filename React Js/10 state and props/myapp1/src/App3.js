import React from 'react';
class App extends React.Component {
    constructor(){
        super();
        this.state={
           name:"Andrew Anderson"
        }
    }
    render(){
      console.log(this);
      return (<>
        <h2>State Name : {this.state.name}</h2>
        <button onClick={()=>{this.setState({name:"Jack Jackson"})}}>Change Name</button>
      </>);
  }
}

export default App;


