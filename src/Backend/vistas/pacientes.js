import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

/*Firebase*/
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase';

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();



export default class Pacientes extends Component {
  state= {
    items:[],
    redirect: ''
  }

  componentDidMount() {
   db.collection('Proyectos').doc('Giogin').collection("Pacientes").onSnapshot((snapShots)=>{
     this.setState({
       items: snapShots.docs.map( doc=>{
         return {id:doc.id, data:doc.data()}
       })
     })

     window.$('#dataTable').DataTable();

   },error => {
     console.log("ERROR AL PACIENTES");
   });
 };



 deleteItem =(id) =>{
   db.collection('Proyectos').doc('Giogin').collection("Pacientes").doc(id).delete();
 };


 atender = (data) =>{

    let ref = db.collection('Proyectos').doc('Giogin').collection("Pacientes").doc(data.cedula);
    ref.get()
     .then(doc => {

         this.setState({
           redirect:<Redirect to={{
                                  pathname: '/backend/nhistoria',
                                  state: { data: doc.data() }
                              }}
                      />
         })
         return

     })
     .catch(err => {
       alert("Error");
       console.log('Error getting documents', err);
     });
 }


  render () {
    const{items,redirect} = this.state;

    if (redirect) {
       return redirect;
     }

    return (
      <main>
                <div className="container-fluid">

                    <div className="row align-items-center mt-4">
                        <div className="col">
                            <h1 className="">Pacientes</h1>
                        </div>
                        <div className="col-2">
                        <NavLink
                        exact to="/backend/Registro"
                        className="btn btn-primary"
                        >
                         Nuevo
                        </NavLink>
                        </div>
                    </div>



                    <div className="row">

                        <div className="col-12">
                            <div className="table-responsive table-hover">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Nombre y Apellido</th>
                                            <th>Cedula</th>
                                            <th>Telefono</th>
                                            <th className="d-none"></th>
                                            <th className="d-none"></th>
                                            <th className="d-none"></th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                    {items && items !== undefined? items.map((item,key)=>(
                                      <tr key={key}>
                                          <td>{item.data.nombre}</td>
                                          <td>{item.data.cedula}</td>
                                          <td>{item.data.movil}</td>

                                           <td className="botones">
                                           <button onClick={() => this.atender(item.data)} className="btn btn-success">
                                           HISTORIA
                                           </button>
                                            </td>


                                         <td className="botones">
                                          <NavLink
                                          exact to="/backend/Registro"
                                          className="btn btn-primary"
                                          >
                                          EDITAR
                                          </NavLink>
                                          </td>



                                          <td className="botones">
                                            <buttom className="btn btn-danger" onClick={()=>this.deleteItem(item.id)}>
                                            CANCELAR
                                            </buttom>
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
