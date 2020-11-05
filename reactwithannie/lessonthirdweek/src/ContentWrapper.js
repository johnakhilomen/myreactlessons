import React, { Component } from 'react';
import "./ContentWrapper.css"
class ContentWrapper extends Component {
    state = {  }
    constructor(props)
    {
        super(props);
    }
    render() { 
        return ( 
            <div class ="wrapper">
                <img src={this.props.imageSrc}></img>
                <p>{this.props.content}</p>
            </div>
         );
    }
}
 
export default ContentWrapper;