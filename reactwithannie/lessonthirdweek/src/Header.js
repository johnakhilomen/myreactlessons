import React, { Component } from 'react';

//Base clas is the Component
//In react to create a new component, we have to extend the base Component

class Header extends Component {
    constructor(props)
    {
        super(props) //we're invoking the Base clas constructor
        console.log(this.props.headerInfo);
        
    }
    render() { 
        const {pgTitle, menus} = this.props.headerInfo;
        return ( 
            <div>
                <h1>{pgTitle}</h1>
                {/* Find to pull out just an item*/}
                <h2>{menus.find(m => m == "Register")} On My Website!</h2>
                <h2></h2>
                <ul style={{listStyle: "none"}}>
                    {
                    //[1,2,3,4,3,4].filter((x) => x % 2 != 0).forEach(y=>console.log(y))
                    //Find to pull out a collection of items
                    menus.filter(m=> m!= "Log in" && m!= "Register").map((item)=><li id={item.id}>{item}</li>)
                    }
                </ul>
            </div>
         );
    }
}
 
export default Header;