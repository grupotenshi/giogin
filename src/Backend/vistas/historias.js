import React, { Component } from 'react'

export default class Historias extends Component {


  render () {
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
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                                        <tr>
                                            <td>Jully del Valle Oliveros Guzman</td>
                                            <td>8377071</td>
                                            <td>28/31/2020</td>
                                            <td>Consulta</td>
                                            <td className="botones"> <a href="historia.html" className="btn btn-success">Ver</a></td>
                                            <td className="botones"> <a href="#" className="btn btn-danger">Eliminar</a></td>
                                        </tr>

                                        <tr>
                                            <td>Michal Jackson</td>
                                            <td>8377071</td>
                                            <td>28/31/2000</td>
                                            <td>Consulta</td>
                                            <td className="botones"> <a href="historia.html" className="btn btn-success">Ver</a></td>
                                            <td className="botones"> <a href="#" className="btn btn-danger">Eliminar</a></td>
                                        </tr>

                                        <tr>
                                            <td>Elvis Presli</td>
                                            <td>8377071</td>
                                            <td>28/31/1964</td>
                                            <td>Ecografia</td>
                                            <td className="botones"> <a href="historia.html" className="btn btn-success">Ver</a></td>
                                            <td className="botones"> <a href="#" className="btn btn-danger">Eliminar</a></td>
                                        </tr>

                                        <tr>
                                            <td>Sean Paul</td>
                                            <td>20547844</td>
                                            <td>28/31/1999</td>
                                            <td>Ecografia</td>
                                            <td className="botones"> <a href="historia.html" className="btn btn-success">Ver</a></td>
                                            <td className="botones"> <a href="#" className="btn btn-danger">Eliminar</a></td>
                                        </tr>


                                        <tr>
                                            <td>Sean Paul</td>
                                            <td>20547844</td>
                                            <td>28/31/1999</td>
                                            <td>Consulta</td>
                                            <td className="botones"> <a href="historia.html" className="btn btn-success">Ver</a></td>
                                            <td className="botones"> <a href="#" className="btn btn-danger">Eliminar</a></td>
                                        </tr>


                                        <tr>
                                            <td>Simon Bolivar</td>
                                            <td>20547844</td>
                                            <td>28/31/1999</td>
                                            <td>Consulta</td>
                                            <td className="botones"> <a href="historia.html" className="btn btn-success">Ver</a></td>
                                            <td className="botones"> <a href="#" className="btn btn-danger">Eliminar</a></td>
                                        </tr>


                                        <tr>
                                            <td>Emilio Lovera</td>
                                            <td>20547844</td>
                                            <td>28/31/1999</td>
                                            <td>Ecografia</td>
                                            <td className="botones"> <a href="historia.html" className="btn btn-success">Ver</a></td>
                                            <td className="botones"> <a href="#" className="btn btn-danger">Eliminar</a></td>
                                        </tr>
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
