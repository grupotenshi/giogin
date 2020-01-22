import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Backend from './Backend';
import Inicio from './Inicio';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio}/>
        <Route exact path="/backend*" component={Backend}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  ); 
}

export default App;
