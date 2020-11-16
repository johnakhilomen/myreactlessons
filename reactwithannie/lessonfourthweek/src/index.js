import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Aboutme from './Aboutme';
import WhyAnniesPortal from "./WhyAnniesPortal";
class Index extends Component {
  state = {  }
  render() { 
    return (  
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <App></App>
          </Route>
          <Route path="/aboutme">
            <Aboutme></Aboutme>
          </Route> 
          <Route path="/whyme">
            <WhyAnniesPortal></WhyAnniesPortal>
          </Route>    
        </Switch>
      </BrowserRouter>
    );
  }
}
 
ReactDOM.render(<Index/>, document.getElementById('root'));

