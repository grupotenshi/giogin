import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

/*Firebase*/
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase';

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();



export default class Historias extends Component {
  state= {
    items:[]

  }

  componentDidMount() {

    var arregloHistorias =[];
   db.collection('Proyectos').doc('Giogin').collection("Pacientes").onSnapshot(snapShotsPacientes=>{

     snapShotsPacientes.docs.forEach(docPaciente => {
       db.collection('Proyectos').doc('Giogin').collection("Pacientes").doc(docPaciente.id).collection("Historia").onSnapshot((snapShotsHistoria)=>{

         snapShotsHistoria.docs.forEach( docHistoria =>{
            arregloHistorias.push({id:docHistoria.id, historia:docHistoria.data(), paciente:docPaciente.data()});
          })

          this.setState({
            items: arregloHistorias
          });
          window.$('#dataTable').DataTable();

       },error => {
         console.log("ERROR AL CARGAR");
       });
     });


     /*this.setState({
       items: snapShots.docs.map( doc=>{
         return {id:doc.id, data:doc.data()}
       })
     })*/

   },error => {
     console.log("ERROR AL CARGAR HISTORIA");
   });


 };


 deleteItem =(id) =>{
   db.collection('Proyectos').doc('Giogin').collection("Historia").doc(id).delete();
 }
  render () {
    const{items} = this.state;
    return (
    <main>
        <div className="container-fluid">

            <div className="row align-items-center">
                <div className="col">
                    <h1 className="mt-4">Libro de historias</h1>
                </div>
                <div className="col-2">
                </div>
            </div>

            <div className="row">

                <div className="col-12">
                    <div className="table-responsive table-hover">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Nombre y Apellido</th>
                                    <th>Cedula</th>
                                    <th>Fecha historia</th>
                                    <th>Servicio</th>
                                    <th className="d-none"></th>
                                    <th className="d-none"></th>
                                </tr>
                            </thead>

                            <tbody>
                            {items && items !== undefined? items.map((item,key)=>(
                              <tr key={key}>
                                  <td>{item.paciente.nombre}</td>
                                  <td>{item.paciente.cedula}</td>
                                  <td>{item.historia.fecha}</td>
                                  <td>{item.historia.servicio}</td>

                                   <td className="botones">
                                    <NavLink
                                    exact to="/backend/nhistoria"
                                    className="btn btn-success"
                                    >
                                    HISTORIA
                                    </NavLink>
                                    </td>

                                  <td className="botones">
                                    <button className="btn btn-danger" onClick={()=>this.deleteItem(item.id)}>
                                    CANCELAR
                                    </button>
                                  </td>
                              </tr>
                            )):null}

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
