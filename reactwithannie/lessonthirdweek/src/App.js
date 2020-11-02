import logo from './logo.svg';
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Name from "./Name"
const fetch = require('node-fetch');

class App extends Component {

  /*componentDidMount()
  {
    let status;
    fetch("https://localhost:5001/api/user/list")
    .then((res) => {status = res.status; return res.json()})
    .then((jsonData) => {
      console.log(status);
      console.log(jsonData);
      //this.setState({data: jsonData})
    })
    .catch(err=>console.log(err));
  }*/
  
  state = 
  {
    someArr : [1,2,3,4,5],
    data :[],
    headerInfo: {
      pgTitle: "Welcome to Annie's web",
      menus : ["Home", "About Annie", "Register", "Log in", "Contact me"]
    },
    footerInfo: 
    {
      copyrightInfo: "@2020 Annie's App",
      subInfo: "Thank you for visiting Annie's web"
  }
}
  render() { 
    let counter = 0;
    return ( 
      <div>
        App
        <Header headerInfo = {this.state.headerInfo}></Header>
        <Main mainInfo = {this.state.mainInfo}></Main>
        <div>
        {
          this.state.someArr.map((item)=>{
            counter++;
            const itemKey = "item"+counter; //item1, item2, item3 item4
            return <Name key = {itemKey} somevalue = {item}/>
          })
        }
        </div>
        
        <Footer headerInfo = {this.state.footerInfo}></Footer>
        <div style={{border: "solid 2px gray", width: "200px"}}><h3>title 1</h3><p>content 1</p></div>
        </div>
      
     );
  }
}
 
export default App;

