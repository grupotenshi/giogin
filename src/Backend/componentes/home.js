import React, { Component } from 'react'

export default class Home extends Component {


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

                                        <tr>
                                            <td>8377071</td>
                                            <td>Marialejandra Chavez Oliveros</td>
                                            <td>28/31/2020</td>
                                            <td>Mañana</td>
                                            <td className="botones"> <a className="btn btn-success" href="#" onclick="noregistrado() ">Atender</a></td>
                                            <td className="botones"> <a href="" className="btn btn-danger">cancelar</a></td>
                                        </tr>

                                        <tr>
                                            <td>27253754</td>
                                            <td>Rosibel Cristina Bontemps Sevilla</td>
                                            <td>28/31/2020</td>
                                            <td>Mañana</td>
                                            <td className="botones"> <a href="" className="btn btn-success">Atender</a></td>
                                            <td className="botones"> <a href="" className="btn btn-danger">cancelar</a></td>
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
