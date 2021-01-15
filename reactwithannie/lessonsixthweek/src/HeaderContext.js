import React, { createContext, Component } from 'react';

//Instantiate a context object from React context library
export const HeaderContext = createContext();

//Create your react component as usual 
class HeaderContextProvider extends Component {
    state = { 
        menu: ["Menu 1", "Menu 2", "Menu 3", "Menu 4"],
        pgTitle: "Welcome to Annie's web",
        subTitle: "We're building a fun site with context",
    }
    render() { 
        //Return Context.Provider object with the state passed to the value attribute
        return ( 
            <HeaderContext.Provider value={{...this.state}}>
                {this.props.children}
            </HeaderContext.Provider>
         );
    }
}
 
export default HeaderContextProvider;
