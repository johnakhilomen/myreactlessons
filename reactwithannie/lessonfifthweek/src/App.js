import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import { Component } from 'react';

class App extends Component {
  endpointReg = "https://fast-hamlet-07750.herokuapp.com/register";

  state = {
    name: "",
    email: "",
    password: "",
    catinfo: ""
  }

  constructor(props)
  {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const {name, value} = e.target;
    this.setState({
        [name] : value
    });
  }
  
  handleGetCat()
  {
    fetch("https://cat-fact.herokuapp.com/facts")
    .then(response=>response.json())
    .then(response=> 
      {
        console.log(response.all[0].text);
        let catString = `Text: ${response.all[0].text}. \n\n Type: ${response.all[0].type}`
        this.setState({
          catinfo: catString
    })
  })
    .catch(err=>console.log(err));
  }
  handleFormSumbit()
  {
    console.log(JSON.stringify({
      "name" : this.state.name,
      "password": this.state.password,
      "email" : this.state.email
    }));
    if (this.state.name.length < 4)
    {
      alert("Invalid name");
      return;
    }
    else if(this.state.email.indexOf("@") == -1)
    {
      alert("Invalid email address");
      return;
    }
    else if (this.state.password.length < 6)
    {
      alert("Password must be more than 6 characters");
      return;
    } 
    else
    {

      fetch(this.endpointReg, {
          method: 'post',
          body: JSON.stringify({
            "name" : this.state.name,
            "password": this.state.password,
            "email" : this.state.email
          }),
          headers: { 'Content-Type': 'application/json' },
        })
        .then(response=>response.json())
        .then(response=>{
          if(response)
          {
            if(response == "unable to register")
            {
              alert("Unsuccessful Registration! Please try with some different data");
              return;
            }
            alert("Successful Registration");
          }
        })
        .catch(err=>alert(err));
    }
    
  }
   
  render() {
    return (
      <div className="App">
      <h1>Admin Registration - Posting to API</h1>
        Name: <input type="text" 
        placeholder="name" 
        name="name"
        value={this.state.name} 
        onChange={this.handleInputChange}>
        </input>
        <br></br>
        Email: <input type="text" 
        placeholder="email" 
        name="email" 
        value={this.state.email}
        onChange={this.handleInputChange}>
        </input> <br></br>
        Password: <input type="password" 
        placeholder="password" 
        name="password"
        value={this.state.password} 
        onChange={this.handleInputChange}>
        </input>
        <br></br>
        <input type="button" onClick={()=>this.handleFormSumbit()} value="Submit"></input>
        <input type="button" onClick={()=>this.handleGetCat()} value="Get Cat"></input>
        <h1>Getting Cat Info: (Getting from API)</h1>
        <p>{this.state.catinfo}</p>
      </div>
    );
  }
  
}

export default App;
