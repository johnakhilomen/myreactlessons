import React, { Component } from 'react';
import Header from "./Header";

class App extends Component {
  state = { 
    color: "red"
   }
  render() { 
    return ( <div>
      <Header setColor={this.state.color}></Header>
    </div> );
  }
}
 
export default App;
