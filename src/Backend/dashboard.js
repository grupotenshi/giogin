import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';


import Home from './vistas/home';
import Pacientes from './vistas/pacientes';
import Registro from './vistas/registro';
import Historias from './vistas/historias';




export default class Dashboard extends Component {

  render () {
    return (
      <div className="sb-nav-fixed">
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-pink">
            <a className="navbar-brand" href="index.html">Giogin</a>
            <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i className="fas fa-bars"></i></button>
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group d-none">
                    <input className="form-control" type="text" placeholder="Buscar" aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-dark" type="button"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>


            <ul className="navbar-nav ml-auto ml-md-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">Configuración</a><a className="dropdown-item" href="#">Activity Log</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="login.html">Salir</a>
                    </div>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Menu</div>


          <li>
          <NavLink
          exact to="/backend/home"
          activeClassName="active"
          className="nav-link" >
          <div className="sb-nav-link-icon"><i className="fas fa-home"></i></div>
          Inicio
          </NavLink>
          </li>


          <div className="sb-sidenav-menu-heading ">Funciones</div>
          <li>
          <NavLink
          exact to="/backend/pacientes"
          activeClassName="active"
          className="nav-link" >
          <div className="sb-nav-link-icon"><i className="fas fa-female"></i></div>
          Pacientes
          </NavLink>
          </li>


          <li>
          <NavLink
          exact to="/backend/historias"
          activeClassName="active"
          className="nav-link" >
          <div className="sb-nav-link-icon"><i className="fas fa-file-medical-alt"></i></div>
          Historias
          </NavLink>
          </li>






                            <a className="nav-link collapsed d-none" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Layouts
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>

                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav"><a className="nav-link" href="layout-static.html">Static Navigation</a><a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a></nav>
                            </div>

                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div></a>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav"><a className="nav-link" href="login.html">Login</a><a className="nav-link" href="register.html">Register</a><a className="nav-link" href="password.html">Forgot Password</a></nav>
                                    </div>
                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">Error
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div></a>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav"><a className="nav-link" href="401.html">401 Page</a><a className="nav-link" href="404.html">404 Page</a><a className="nav-link" href="500.html">500 Page</a></nav>
                                    </div>
                                </nav>
                            </div>

                        </div>
                    </div>
                    <div className="sb-sidenav-footer d-none">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">

            <Switch>
              <Route exact path="/backend/home*" component={Home}/>
              <Route exact path="/backend/Pacientes*" component={Pacientes}/>
              <Route exact path="/backend/Historias*" component={Historias}/>
              <Route exact path="/backend/Registro*" component={Registro}/>
              <Route component={Home}/>
            </Switch>

            </div>
        </div>

    </div>
    )
  }
}
