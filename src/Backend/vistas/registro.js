import React, { Component } from 'react'





export default class Registro extends Component {



  render () {
    return (
      <main>
                <div class="container-fluid">

                    <div class="row align-items-center">
                        <div class="col">
                            <h1 class="mt-4">Registro de paciente</h1>
                        </div>
                        <div class="col-2">
                        </div>
                    </div>



                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="Cedula">Cedula</label>
                                    <input type="text" class="form-control" id="Cedula"/>
                                </div>

                                <div class="form-group">
                                    <label for="Nombres">Nombres y apellidos</label>
                                    <input type="text" class="form-control" id="Nombres"/>
                                </div>
                                <div class="form-group">
                                    <label for="Fechan">Fecha Nacimiento</label>
                                    <input type="date" class="form-control" id="Fechan"/>
                                </div>

                                <div class="form-group">
                                    <label for="Movil">Telefono Movil</label>
                                    <input type="text" class="form-control" id="Movil" placeholder="Ingrese telefono celular"/>
                                </div>

                                <div class="form-group">
                                    <label for="Casa">Telefono Casa</label>
                                    <input type="text" class="form-control" id="Casa" placeholder="Ingrese telefono Casa"/>
                                </div>
                            </div>

                            <div class="col-6">

                                <div class="form-group">
                                    <label for="Casa">Correo Electrónico</label>
                                    <input type="text" class="form-control" id="Casa" placeholder="Ingrese Correo"/>
                                </div>

                                <div class="form-group">
                                    <label for="Casa">Dirección</label>
                                    <textarea class="form-control" name="" id="" rows="2">
                                    </textarea>
                                </div>

                                <div class="form-group">
                                    <label for="informacion">Información del paciente</label>
                                    <textarea class="form-control" name="" id="" rows="5">
                                    </textarea>
                                </div>
                                <a href="#" class="btn btn-info">Limpiar</a>
                                <a href="#" class="btn btn-success" onclick="registrado()">Guardar</a>
                                <a href="index.html" class="btn btn-danger">Cancelar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
  }
}
