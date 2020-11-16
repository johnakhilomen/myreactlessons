import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{background: "blue", color: "white"}}>
                <h1>Annie's portal</h1>
                <center>
                    <Link style={{color: "white"}} to="/">Home</Link> &nbsp;
                    <Link style={{color: "white"}} to="/aboutme">About me</Link> &nbsp;
                    <Link style={{color: "white"}} to="/whyme">Why me</Link>
                </center>
            </div>
         );
    }
}
 
export default Header;