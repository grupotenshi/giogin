import React, { Component } from 'react'

import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase';

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();

export default class Nhistoria extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cedula: '',
      servicio: '',
      seguro: '',
      historia: '',
      estado: '',
      textos: {
        nombre: '',
        telefono: ''
      }
    };

    if(props.location.state && props.location.state.data){
      let { data } = props.location.state
      this.state.cedula = data.cedula;
      this.state.textos.nombre = data.nombre;
      this.state.textos.telefono = data.telefono;
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange = (e) => {
    const { name, value } = e.target//Propiedades del input
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { cedula, servicio, seguro, historia, estado} = this.state
    let tablaHistoria = db.collection('Proyectos').doc('Giogin').collection('Pacientes').doc(cedula).collection('Historia');

    tablaHistoria.add({
      'servicio': servicio,
      'seguro': seguro,
      'historia': historia,
      'estado': estado
    });
  }


  render () {
    return (
      <main>
          <div className="container-fluid">
              <div className="row align-items-center">
                  <div className="col">
                      <h1 className="mt-4">Creando historia</h1>
                  </div>
                  <div className="col-2">
                  </div>
              </div>




              <form className="container" onSubmit={this.handleSubmit}>
                  <div className="row">
                      <div className="col-4">
                          <h5 className="font-italic">Datos del paciente</h5>
                          <label className="font-italic d-block">
                              Nombre: {this.state.textos.nombre}
                          </label>

                          <label className="font-italic d-block">
                              Cedula: {this.state.cedula}
                          </label>
                          <label className="font-italic d-block">
                              Telefono: {this.state.textos.telefono}
                          </label>
                      </div>

                      <div className="col-4">
                          <h5 className="font-italic">Informacion del paciente</h5>
                          <p>Este paciente ha presentado en varios ocaciones alergia a los anticonceptivos, no se le debe suministrar inplanon</p>
                      </div>

                      <div className="col-4 align-self-center">
                          <div className="form-group">
                              <select className="form-control" name="servicio" onChange={this.handleChange}>
                                  <option value="Consulta">Consulta</option>
                                  <option value="Citología">Citología</option>
                                  <option value="Planificación Familiar">Planificación Familiar</option>
                                  <option value="Ecografía">Ecografía</option>
                              </select>
                          </div>
                          <div className="form-group">
                              <select className="form-control" name="seguro" onChange={this.handleChange}>
                                  <option value="">Seleccione seguro</option>
                                  <option value="Ministerio de educación">Ministerio de educación</option>
                                  <option value="Vitalicia">Vitalicia</option>
                                  <option value="Otro">Otro</option>
                              </select>
                          </div>
                      </div>
                  </div>



                  <div className="row justify-content-center">
                      <div className="col-8">
                          <h4 className="mt-4">Historia</h4>
                      </div>
                      <div className="col-8">
                          <textarea className="form-control" name="historia" onChange={this.handleChange} cols="30" rows="10"></textarea>
                      </div>
                  </div>

                  <div className="row justify-content-center my-3">
                      <div className="col-4 d-flex justify-content-around">
                          <a href="#" className="btn btn-info">Limpiar</a>
                          <button type="submit" className="btn btn-success ">Guardar</button>
                          <a href="index.html" className="btn btn-danger">Cancelar</a>
                      </div>
                  </div>
              </form>
          </div>
      </main>
    )
  }
}
