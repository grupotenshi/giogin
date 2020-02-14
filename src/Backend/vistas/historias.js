import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

/*Firebase*/
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase';

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();


export default class Historias extends Component {
  state= {
    items:[],
    redirect: ''
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


 deleteItem =(cedula,id) =>{

   window.Swal.fire({
     title: 'Esta seguro',
     text: "Si elimina esta historia no podra revertir los cambios",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Si, eliminar',
     cancelButtonText: 'No, eliminar'
   }).then((result) => {
     if (result.value) {
       window.Swal.fire(
         'Historia eliminada!',
         'Registro eliminado',
         'success'
       )

          db.collection('Proyectos').doc('Giogin').collection("Pacientes").doc(cedula).collection('Historia').doc(id).delete();

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


     }
   })
      return

 }



 verHistoria = (data) =>{
    let ref = db.collection('Proyectos').doc('Giogin').collection("Pacientes")
    .doc(data.paciente.cedula).collection("Historia").doc(data.id);

    ref.get()
     .then(doc => {
       if (!doc.exists) {
         alert("Error al traer la data");
         return
       }else{

            var dataSet = doc.data();
            dataSet.cedula = data.paciente.cedula;
            dataSet.nombre = data.paciente.nombre;
            dataSet.movil = data.paciente.movil;
            dataSet.descripcion = data.paciente.descripcion;
            dataSet.id = data.id;


           this.setState({
             redirect:<Redirect to={{
                                    pathname: '/backend/nhistoria',
                                    state: { data: dataSet }
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
                                    <th>Fecha y hora</th>
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
                                    <button
                                    onClick={() => this.verHistoria(item)}
                                    className="btn btn-success"
                                    >
                                    Ver
                                    </button>
                                    </td>

                                  <td className="botones">
                                    <button className="btn btn-danger" onClick={()=>this.deleteItem(item.paciente.cedula,item.id)}>
                                    ELIMINAR
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
