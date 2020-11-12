import logo from './logo.svg';
import './App.css';
import React, { Component, Suspense } from 'react';

class App extends Component {
  state = {
    fullname: "",
    emailAddress: "",
    isMarried: false,
    gender: "",
    country: ""
  }
  constructor(props)
  {
    super();
    console.log(this.state);
    /*this.handleFullname = this.handleFullname.bind(this);
    this.handleEmail = this.handleEmail.bind(this);*/
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    const {name, value, type, checked} = e.target;
    if(type==="checkbox")
    {
      console.log(checked);
      this.setState({ [name] : checked}) //"isMarried": e.target.value
    }
    else
    {
      this.setState({
        [name] : value
        });
    }
    /*type === "checkbox" ? this.setState({ [name] : checked}) : 
    this.setState({
    [name] : value
    });*/
    console.log(name);
  }
  /*
  handleFullname(e)
  {
    this.setState({
      "fullname": e.target.value
    });
    console.log(this.state.fullname);
  }
  handleEmail(e)
  {
    this.setState({
      "emailAddress": e.target.value
    });
    console.log(this.state.emailAddress);
  }*/
  render()
  {
    return (
      <div className="App">
      <form action="https://formspree.io/f/xdopdezd" method="POST">
        Fullname: <input type="text" 
        placeholder="Fullname" 
        name="fullname"
        value={this.state.fullname} 
        onChange={this.handleInputChange}>
        </input>
        <br></br>
        emailAddress: <input type="text" 
        placeholder="Fullname" 
        name="emailAddress" 
        value={this.state.emailAddress}
        onChange={this.handleInputChange}>
        </input>
        <br></br>
        is Married? <input type="checkbox" 
        name="isMarried" 
        onChange={this.handleInputChange}>
        </input>
        <br></br>
        gender? <input type="radio" 
        name="gender" 
        value = "male"
        checked={this.state.gender === "male"}
        onChange={this.handleInputChange}>
        </input> Male
        <input type="radio" 
        name="gender" 
        value = "female"
        checked={this.state.gender === "female"}
        onChange={this.handleInputChange}>
        </input> Female 
        <br></br>
        <select value={this.state.country}  name="country" onChange={this.handleInputChange}>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
        </select>
        <h1>Fullname: {this.state.fullname}</h1>
        <h1>Email: {this.state.emailAddress}</h1>
        <h1>Is Married: {this.state.isMarried}</h1>
        <h1>Gender: {this.state.gender}</h1>
        <h1>country: {this.state.country}</h1>
        <button>Submit</button>
      </form>
      </div>
    );
  }
  
}

export default App;
