import React, { Component } from 'react'

export default class Pacientes extends Component {



  render () {
    return (
      <main>
                <div className="container-fluid">

                    <div className="row align-items-center">
                        <div className="col">
                            <h1 className="mt-4">Pacientes</h1>
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
                                            <th>Telefono</th>
                                            <th className="d-none"></th>
                                            <th className="d-none"></th>
                                            <th className="d-none"></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Marialejandra Chavez Oliveros</td>
                                            <td>8377071</td>

                                            <td>0291 - 6411516</td>
                                            <td className="botones"> <a href="" className="btn btn-primary"> Historia</a></td>
                                            <td className="botones"> <a href="" className="btn btn-success">Editar</a></td>
                                            <td className="botones"> <a href="" className="btn btn-danger">Eliminar</a></td>
                                        </tr>

                                        <tr>
                                            <td>Marialejandra Chavez Oliveros</td>
                                            <td>8377071</td>

                                            <td>0291 - 6411516</td>
                                            <td className="botones"> <a href="" className="btn btn-primary"> Historia</a></td>
                                            <td className="botones"> <a href="" className="btn btn-success">Editar</a></td>
                                            <td className="botones"> <a href="" className="btn btn-danger">Eliminar</a></td>
                                        </tr>

                                        <tr>
                                            <td>Marialejandra Chavez Oliveros</td>
                                            <td>8377071</td>

                                            <td>0291 - 6411516</td>
                                            <td className="botones"> <a href="" className="btn btn-primary"> Historia</a></td>
                                            <td className="botones"> <a href="" className="btn btn-success">Editar</a></td>
                                            <td className="botones"> <a href="" className="btn btn-danger">Eliminar</a></td>
                                        </tr>

                                        <tr>
                                            <td>Marialejandra Chavez Oliveros</td>
                                            <td>8377071</td>

                                            <td>0291 - 6411516</td>
                                            <td className="botones"> <a href="" className="btn btn-primary"> Historia</a></td>
                                            <td className="botones"> <a href="" className="btn btn-success">Editar</a></td>
                                            <td className="botones"> <a href="" className="btn btn-danger">Eliminar</a></td>
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
