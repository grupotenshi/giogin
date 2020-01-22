import React from 'react';
import {Link} from 'react-router-dom'

function Inicio() {
  return (
    <div classNameName="App">
      <div className="responsive-bar">
          <div className="logo">
              <img src="logo.png" alt=""/>
          </div>
          <div className="menu">
              <h4>Menu</h4>
          </div>

      </div>
      <nav className="animated fadeInDown">
          <div className="logo">
              <img src="img/logo.png" alt=""/>
          </div>
          <ul>
              <li><a href="index.html" className="active">Home</a></li>
              <li><a href="nosotros.html">Nosotros</a></li>
              <li><a href="servicios.html">Servicios</a></li>
              <li><a href="contacto.html">Contacto</a></li>
          </ul>
      </nav>
      <main>
          <div className="home container-fluid px-0 ">

              <div className="animated fadeInLeft publicidad d-none d-lg-block">

              </div>
              <div className="container">
                  <form className="row justify-content-center">
                      <div className="col-12 col-lg-7">
                          <h3 className="text-center mb-5 animated fadeInDown">Solicita tu cita</h3>

                          <div className="form-group animated fadeInDown">
                              <label for="exampleInputPassword1">Número de celular</label>
                              <input type="password" className="form-control" id="exampleInputPassword1"/>
                          </div>
                          <div className="form-group animated fadeInDown">
                              <label for="exampleInputEmail1">Nombres</label>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onfocus="focused()"/>

                          </div>


                          <a href="" className="btn btn-1 mt-5  d-block btn-lg">Solicitar</a>

                          <div className="frame__WhatsApp social-btns"><a className="btn whatsapp" rel="noopener noreferrer" target="_blank" href="https://wa.me/573103500905?text=¡Hola! Quisiera aumentar la calidad con la que trabaja mi empresa"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></div>
                      </div>
                  </form>
              </div>

          </div>
      </main>
    </div>
  );
}

export default Inicio;
