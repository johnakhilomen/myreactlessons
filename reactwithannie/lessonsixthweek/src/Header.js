import React, { Component } from 'react';
import { HeaderContext } from './HeaderContext';

class Header extends Component {
    constructor(props)
    {
        super(props);
        console.log(props)
    }
    render() { 
        return ( 
            //The consumer of the HeaderContext here will consume and use the state which is parsed to headerCtx
           <HeaderContext.Consumer>{(headerCtx) =>{ 
             console.log(headerCtx); 
             const {menu, pgTitle, subTitle} = headerCtx;
             return(
              <header>
                  <h1>{pgTitle}</h1>
                  <br></br>
                  <h3>{subTitle}</h3>
                <nav>
                <ul>
                {menu.map((value, index) => {
                  return <li style={{"display" : "inline"}}>{value}</li>
                })}
                </ul>
              </nav>
            </header>
             );        

           }}
           </HeaderContext.Consumer>
       
         );
    }
}
 
export default Header;
