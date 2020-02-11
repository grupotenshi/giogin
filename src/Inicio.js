import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './frontend/component/nav';
import Home from './frontend/component/home';
import Servicios from './frontend/component/servicios';
import Cita from './frontend/component/cita';
import Backend from './Backend';

class App extends Component {
  render(){
    return(
      <div>
      <div className="responsive-bar">
          <div className="logo">
              <img src="logo.png" alt=""/>
          </div>
          <div className="menu">
              <h4>Menu</h4>
          </div>
      </div>
      <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/backend*" component={Backend}/>
          <Route exact path="/Servicios*" component={Servicios}/>
          <Route exact path="/Cita*" component={Cita}/>
          <Route component={Home}/>
        </Switch>

      </div>

    )
  }
}

export default App;
