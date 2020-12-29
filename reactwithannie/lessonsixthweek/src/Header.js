import React, { Component } from 'react';
import { HeaderContext } from './HeaderContext';

class Header extends Component {
    render() { 
        return ( 
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