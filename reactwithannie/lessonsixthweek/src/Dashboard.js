import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { AnotherContext } from './AnotherContext';
import React, { Component } from 'react';

class Dashboard extends Component {
    render() { 
        return (
            <div className="App">
             <Header></Header>
             <h1>Welcome to Dashboard!</h1>
             <AnotherContext.Consumer>{(pgCtx) => { 
                     console.log(pgCtx);   
                     const {contentA, contentB} = pgCtx;
                     return(
                        <div>
                            <p>Consuming data from AnotherContextProvider</p>
                        <p>{contentA}</p>
                        <br></br>
                        <p>{contentB}</p>
                     </div>   
                     )
                         
                   }}
              </AnotherContext.Consumer>
               <p>Some footer content</p>
            </div>
          );
    }
}
 
export default Dashboard;
