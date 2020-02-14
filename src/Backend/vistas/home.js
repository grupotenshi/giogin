import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

/*Firebase*/
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase';

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();



export default class Home extends Component {
  state= {
    items:[],
    redirect: '',
    fechasistema: ''
  }




  componentDidMount() {

<<<<<<< HEAD
=======






>>>>>>> c5b999f2dde76d499942a7b4633bd0bc0a984703
   db.collection('Proyectos').doc('Giogin').collection("Temporal").onSnapshot((snapShots)=>{
     this.setState({
       items: snapShots.docs.map( doc=>{
         return {id:doc.id, data:doc.data()}
       })
     })
     window.$('#dataTable').DataTable();
   },error => {
     console.log("ERROR AL CARGAR DATA");
   });


 };

 deleteItem =(id) =>{
   window.Swal.fire({
     title: 'Esta seguro',
     text: "Si cancela la cita no podra revertir los cambios",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Si, cancelar',
     cancelButtonText: 'No, cancelar'
   }).then((result) => {
     if (result.value) {
       window.Swal.fire(
         'Cita cancelada!',
         'Registro eliminado',
         'success'
       )
        db.collection('Proyectos').doc('Giogin').collection("Temporal").doc(id).delete();
     }
   })
      return
 };

 atender = (data) =>{
    let ref = db.collection('Proyectos').doc('Giogin').collection("Pacientes").doc(data.cedula);
    ref.get()
     .then(doc => {
       if (!doc.exists) {
         window.Swal.fire({
           title: 'Paciente no registrado',
           text: "Para atender debe registrarlo",
           icon: 'info',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Si, registrar',
           cancelButtonText: 'No, registrar'
         }).then((result) => {
           if (result.value) {
             this.setState({
               redirect:<Redirect to={{
                                      pathname: '/backend/Registro',
                                      state: { data: data }
                                  }}
                          />
             })
           }
         })


         return
       }else{
         this.setState({
           redirect:<Redirect to={{
                                  pathname: '/backend/nhistoria',
                                  state: { data: doc.data() }
                              }}
                      />
         })
         return
       }
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


                                    {items && items !== undefined? items.map((item,key)=>(
                                      <tr key={key}>
                                          <td>{item.data.cedula}</td>
                                          <td>{item.data.nombre}</td>
                                          <td>{item.data.fecha}</td>
                                          <td>{item.data.horario}</td>

                                          <td className="botones">
                                            <button onClick={() => this.atender(item.data)} className="btn btn-success">
                                            ATENDER
                                            </button>
                                          </td>

                                          <td className="botones">
                                            <buttom className="btn btn-danger" onClick={() => this.deleteItem(item.id)}>
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
