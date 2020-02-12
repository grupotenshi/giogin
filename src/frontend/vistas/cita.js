import React,{Component} from 'react';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase';

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();

export default class Cita extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cedula: '',
      nombre: '',
      fecha: '',
      horario: '',
      errorAlIngresar : false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange = (e) => {
    const { name, value } = e.target//Propiedades del input
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { cedula, nombre, fecha, horario } = this.state
    let tablaTemporal = db.collection('Proyectos').doc('Giogin').collection('Temporal');

    tablaTemporal.add({
      'nombre': nombre,
      'cedula' : cedula,
      'fecha' : fecha,
      'horario' : horario
    });


  }

  render() {
    return(
      <main>
      <div className="cita container-fluid px-0 bg-white ">
                  <div className="animated fadeInLeft publicidad d-none d-lg-block">
                  </div>
                  <div className="container">
                      <form className="row justify-content-center"  onSubmit={this.handleSubmit}>
                          <div className="col-12 col-lg-7">
                              <h3 className="text-center mb-5 animated fadeInDown">Solicita tu cita</h3>

    <div className="form-group animated fadeInDown">
        <label htmlFor="exampleInputPassword1">Documento de Identidad</label>
        <input type="text" className="form-control" name="cedula" onChange={this.handleChange}/>
    </div>

    <div className="form-group animated fadeInDown">
        <label htmlFor="exampleInputEmail1">Nombre y apellido</label>
        <input type="text" className="form-control" name="nombre" aria-describedby="emailHelp" onChange={this.handleChange}/>
    </div>

    <div className="form-group animated fadeInDown">
        <label htmlFor="exampleInputEmail1">Fecha de la cita</label>
        <input type="date" className="form-control" name="fecha" aria-describedby="emailHelp" onChange={this.handleChange}/>
    </div>

    <div className="form-group animated fadeInDown">
        <label htmlFor="horario">Horario</label>
        <select  className="form-control" name="horario" onChange={this.handleChange}>
            <option value="">Seleccione</option>
            <option value="Mañana">Mañana</option>
            <option value="Tarde">Tarde</option>
        </select>
    </div>

        <button type="submit" className="btn btn-1 mt-5  d-block btn-lg">Solicitar</button>
                          </div>
                      </form>
                  </div>
              </div>
    </main>
    )
  }
  }
