import React, { Component } from 'react'

import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase';

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();

export default class Registro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cedula: '',
      nombre: '',
      nacimiento: '',
      casa: '',
      movil: '',
      correo: '',
      direccion: '',
      descripcion: '',
      estado : ''
    };

    if(props.location.state && props.location.state.data){
      let { data } = props.location.state;
      this.state.cedula = data.cedula;
      this.state.nombre = data.nombre;
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
    const { cedula, nombre, nacimiento, casa, movil, correo, direccion, descripcion, estado} = this.state

    if(!cedula || cedula == ""){
      alert("Debes completar los datos");
      return
    }
    let tablaPacientes =
     db.collection('Proyectos').doc('Giogin').collection('Pacientes').doc(cedula);

    tablaPacientes.set({
      'cedula': cedula,
      'nombre': nombre,
      'nacimiento': nacimiento,
      'casa': casa,
      'movil': movil,
      'correo': correo,
      'direccion': direccion,
      'descripcion': descripcion,
      'estado' : estado
    });
  }





  render () {
    return (
      <main>
                <div className="container-fluid">

                    <div className="row align-items-center">
                        <div className="col">
                            <h1 className="mt-4">Registro de paciente</h1>
                        </div>
                        <div className="col-2">
                        </div>
                    </div>



                    <div className="container">

                        <form className="row" onSubmit={this.handleSubmit}>
                            <div className="col-6">
                                <div className="form-group">
                                    <label >Cedula</label>
                                    <input type="text" className="form-control" name="cedula" onChange={this.handleChange} value={this.state.cedula}/>
                                </div>

                                <div className="form-group">
                                    <label >nombre y apellidos</label>
                                    <input type="text" className="form-control" name="nombre" onChange={this.handleChange} value={this.state.nombre}/>
                                </div>
                                <div className="form-group">
                                    <label >Fecha Nacimiento</label>
                                    <input type="date" className="form-control" name="nacimiento" onChange={this.handleChange} value={this.state.nacimiento}/>
                                </div>

                                <div className="form-group">
                                    <label >Telefono Movil</label>
                                    <input type="text" className="form-control" name="movil" onChange={this.handleChange} placeholder="Ingrese telefono celular" value={this.state.movil}/>
                                </div>

                                <div className="form-group">
                                    <label >Telefono Casa</label>
                                    <input type="text" className="form-control" name="casa" onChange={this.handleChange} placeholder="Ingrese telefono Casa" value={this.state.casa}/>
                                </div>
                            </div>

                            <div className="col-6">

                                <div className="form-group">
                                    <label >Correo Electrónico</label>
                                    <input type="text" className="form-control" name="correo" onChange={this.handleChange} placeholder="Ingrese Correo"  value={this.state.correo}/>
                                </div>

                                <div className="form-group">
                                    <label >Dirección</label>
                                    <textarea className="form-control" name="direccion" onChange={this.handleChange}  rows="2" value={this.state.direccion}>
                                    </textarea>
                                </div>

                                <div className="form-group">
                                    <label >Información del paciente</label>
                                    <textarea className="form-control" name="descripcion" onChange={this.handleChange} rows="5" value={this.state.descripcion}>
                                    </textarea>
                                </div>

                                <button  className="btn btn-info">Limpiar</button>
                                <button  className="btn btn-success" type="submit">Guardar</button>
                                <button  className="btn btn-danger">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
    )
  }
}
