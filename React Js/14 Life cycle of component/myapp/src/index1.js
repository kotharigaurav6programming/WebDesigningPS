import React from "react";
import { createRoot } from "react-dom/client";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
     return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }}

createRoot(document.getElementById('root')).render(<App favcol="yellow"/>);  
