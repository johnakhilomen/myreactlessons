import React, { Component } from 'react';
import { AnotherContext } from './AnotherContext';

class PageComponent extends Component {
    render() { 
        return ( 
           <AnotherContext.Consumer>{(pgCtx) =>{ 
             console.log(pgCtx); 
             const {contentA, contentB} = pgCtx;
             return(
             <div>
                 <p>{contentA}</p>
                 <br></br>
                 <p>{contentB}</p>
                 <button type="button" onClick={()=>pgCtx.printHelloWorld()}>Click me!</button>
             </div>
             );        

           }}
           </AnotherContext.Consumer>
       
         );
    }
}
 
export default PageComponent;