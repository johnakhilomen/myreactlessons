import React, { Component } from 'react';
import Nav from "./Nav";

class Header extends Component {
    constructor(props)
    {
        super(props);
    }
    render() { 
        const {pgTitle, subPgTitle} = this.props.headerInfo;
        return ( 
            <div className="Header">
                <h1 className="pgTitle">{pgTitle}</h1>
                <h3 className="pgTitle">{subPgTitle}</h3>
                <Nav></Nav>
            </div>
         );
    }
}
 
export default Header;