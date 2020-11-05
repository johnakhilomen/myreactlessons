import React, { Component } from 'react';
import ContentWrapper from './ContentWrapper';
import './Main.css';

class MainItem extends Component {
    constructor(props)
    {
        super(props);
        console.log(this.props);
    }
    render() { 
        const {title, content, image} = this.props.mainItem;
        return ( 
        <div className="mainItem">
            <h1>{title}</h1>
            <ContentWrapper content = {content} imageSrc={image}></ContentWrapper>
        </div> );
    }
}
 
export default MainItem;