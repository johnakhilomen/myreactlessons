import React, { createContext, Component } from 'react';

export const HeaderContext = createContext();


class HeaderContextProvider extends Component {
    state = { 
        menu: ["Menu 1", "Menu 2", "Menu 3", "Menu 4"],
        pgTitle: "Welcome to Annie's web",
        subTitle: "We're building a fun site with context",
    }
    render() { 
        return ( 
            <HeaderContext.Provider value={{...this.state}}>
                {this.props.children}
            </HeaderContext.Provider>
         );
    }
}
 
export default HeaderContextProvider;