import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import Main from './Components/Main';
import Footer from './Components/Footer';

class App extends Component {
  state = { 
    header: {
      pgTitle: "Welcome",
      subPgTitle: "Thanks"
    },
    menus: ["Home"],
   }
  render() { 
    return (
      <div className="mainContainer">
      <Header headerInfo={this.state.header}></Header>
      <Main></Main>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
