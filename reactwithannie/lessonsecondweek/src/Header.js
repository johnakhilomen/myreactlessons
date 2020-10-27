import React, { Component } from 'react';

class Header extends Component {
    colorIsSet = false;
    state = {
        buttonText:"Click button"
    }
    constructor(props)
    {
        super(props);
    }
    changeColor = () => {
       
        if(!this.colorIsSet)
        {
            document.body.style = `background: ${this.props.setColor};`;
            this.colorIsSet = true;
            this.setState({buttonText : "Turn off Red"});
        }
        else
        {
            document.body.style = `background: white;`;
            this.colorIsSet = false;
            this.setState({buttonText : "Turn on Red"});
        }
        
    }
    render() { 
        return ( 
            <div>
               <button onClick={this.changeColor}>{this.state.buttonText}</button> 
            </div>
         );
    }
}
 
export default Header;