import React, { Component } from 'react';

class Name extends Component {
    constructor(props)
    {
        super(props);
        console.log(props);
    }
    render() { 
        return ( <div>
            Hello {this.props.somevalue}
        </div> );
    }
}
 
export default Name;