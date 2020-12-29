import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import HeaderContextProvider from './HeaderContext';
import AnotherContextProvider from "./AnotherContext";
import PageComponent from './PageComponent';
import Dashboard from './Dashboard';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" exact={true}>
      <HeaderContextProvider>
          <App></App>
      </HeaderContextProvider>
    </Route>
    <Route path="/dashboard" exact={true}>
      <HeaderContextProvider>
        <AnotherContextProvider>
          <Dashboard></Dashboard>
       </AnotherContextProvider>
      </HeaderContextProvider>
    </Route>
    <Route path="/pg" exact={true}>
      <AnotherContextProvider>
        <PageComponent></PageComponent>
      </AnotherContextProvider>
    </Route>
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
