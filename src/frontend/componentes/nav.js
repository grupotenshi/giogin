import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
export default class Nav extends Component {

  render() {



    return(
      <nav className="sticky">
        <div className="logo d-lg-flex align-items-center">
          <img src="img/logo.png" alt="" />
          <h6> Servicio integral de Ginecología </h6>
        </div>
        <ul>
          <li><NavLink exact to="/home" activeClassName="active" >Home</NavLink></li>
          <li><NavLink exact to="/Servicios" activeClassName="active">Servicios</NavLink></li>
          <li><NavLink exact to="/Citas" activeClassName="active">Citas</NavLink></li>
        </ul>
      </nav>
    )
  }
  }
