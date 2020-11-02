import React, { Component } from 'react';
import './Main.css';

class MainItem extends Component {
    constructor(props)
    {
        super(props);
        console.log(this.props);
    }
    render() { 
        const {title, content} = this.props.mainItem;
        return ( 
        <div className="mainItem">
            <h1>{title}</h1>
            <p>{content}</p>
        </div> );
    }
}
 
export default MainItem;