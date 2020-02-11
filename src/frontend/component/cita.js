import React,{Component} from 'react';

export default class Cita extends Component {

  render() {
    return(
      <main>
      <div className="cita container-fluid px-0 bg-white ">
                  <div className="animated fadeInLeft publicidad d-none d-lg-block">
                  </div>
                  <div className="container">
                      <form className="row justify-content-center">
                          <div className="col-12 col-lg-7">
                              <h3 className="text-center mb-5 animated fadeInDown">Solicita tu cita</h3>

                              <div className="form-group animated fadeInDown">
                                  <label for="exampleInputPassword1">Documento de Identidad</label>
                                  <input type="text" className="form-control" id="exampleInputPassword1"/>
                              </div>

                              <div className="form-group animated fadeInDown">
                                  <label for="exampleInputEmail1">Nombre y apellido</label>
                                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                              </div>

                              <div className="form-group animated fadeInDown">
                                  <label for="exampleInputEmail1">Fecha de la cita</label>
                                  <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                              </div>

                              <div className="form-group animated fadeInDown">
                                  <label for="horario">Horario</label>
                                  <select  className="form-control" id="horario">
                                      <option value="">Seleccione</option>
                                      <option value="">Mañana</option>
                                      <option value="">Tarde</option>
                                  </select>
                              </div>
                              <a  className="btn btn-1 mt-5  d-block btn-lg">Solicitar</a>
                          </div>
                      </form>
                  </div>
              </div>
    </main>
    )
  }
  }
