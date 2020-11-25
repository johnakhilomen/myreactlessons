import React, { Component } from 'react';


class Header extends Component {
    constructor(props)
    {
        super(props)
    }
    render(){ 
    
        if(this.props.myvar === true) {
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <h1>Some cool stuff about conditional rendering</h1>
        )    

        {
            /*
             this.props.myvar === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>
            */
        }
    }
}
 
export default Header;