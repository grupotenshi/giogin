import React,{Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './frontend/componentes/nav';
import Home from './frontend/vistas/home';
import Servicios from './frontend/vistas/servicios';
import Cita from './frontend/vistas/cita';
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
          <Route exact path="/servicios*" component={Servicios}/>
          <Route exact path="/Cita*" component={Cita}/>
          <Route component={Home}/>
        </Switch>

      </div>

    )
  }
}

export default App;
