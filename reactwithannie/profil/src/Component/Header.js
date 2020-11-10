import React, { Component } from 'react';
import Navbar from './Navbar';
import "./Header.css";
class Header extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="Header" style={{}}>
                    Hanieh Torkzadeh
                 </div>
                <div>
                    <Navbar />
                </div>
            </div>
        );
    }
}

export default Header;