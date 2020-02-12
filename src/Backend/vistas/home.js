import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';


/*Firebase*/
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase';

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();



export default class Home extends Component {
  constructor(props) {
      super(props);
      this.ref = db.collection('Proyectos').doc('Giogin').collection("Temporal");
      this.unsubscribe = null;
      this.state = {
        boards: []
      };
    }

    onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { cedula, nombre, fecha, horario, id } = doc.data();
      boards.push({
        key: id,
        doc, // DocumentSnapshot
        cedula,
        nombre,
        fecha,
        horario
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }


  render () {
    return (
      <main>
                <div className="container-fluid">

                    <div className="row align-items-center">
                        <div className="col">
                            <h1 className="mt-4">Lista de espera</h1>
                        </div>
                        <div className="col-2">

                        </div>
                    </div>

                    <div className="row">

                        <div className="col-12">
                            <div className="table-responsive table-hover">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Cedula</th>
                                            <th>Nombre y Apellido</th>
                                            <th>Fecha</th>
                                            <th>Horario</th>
                                            <th className="d-none"></th>
                                            <th className="d-none"></th>
                                        </tr>
                                    </thead>
                                    <tbody>



                                    {this.state.boards.map(board =>
                                          <tr>
                                              <td>{board.cedula}</td>
                                              <td>{board.nombre}</td>
                                              <td>{board.fecha}</td>
                                              <td>{board.horario}</td>
                                              <td className="botones">
                                                <NavLink
                                                exact to="/backend/registro"
                                                className="btn btn-success"
                                                >
                                                Atender
                                                </NavLink>
                                              </td>
                                              <td className="botones"> <a className="btn btn-danger">cancelar</a></td>
                                          </tr>
                                      )
                                      }







                                  </tbody>


                                </table>

                            </div>
                        </div>

                    </div>




                </div>
            </main>
    )
  }
}
