import React, { Component } from 'react';

class Header extends Component {
    constructor(props)
    {
        super(props);
        console.log("screen width"+window.screen.width);
    }
    render(){ 
    
        if(this.props.loggedOut === true) {
            return (
                <div>
                     <h1>Logged our successfully!</h1>
                     <p>Thank you for using our app...</p>
                </div>
               
            )
        }
        else if(this.props.loggedIn === true)
        {
            return(
                <div>Welcome back Annie</div>
            )
        }
        else
        {
            return (
                <h1>Some cool stuff about conditional rendering</h1>
            )    
    
        }

        {
            /*

        if(window.screen.width == 1024)
        {
            return(<div>
                <h1>You're on screen size of 1024</h1>
            </div>)
        }
        else
        {
            return (
            <div>
                <h1>No screen size for now!</h1>
            </div>)
        }
            */
        }
        
        {
            /*
             this.props.myvar === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>
            */
        }
    }
}
 
export default Header;