import React,{Component} from 'react';

export default class Servicios extends Component {

  render() {
    return(
      <main>
      <div className="servicios container d-flex justify-content-center justify-content-lg-between  flex-wrap">

          <div className="card" >
              <img src="img/servicios/icono1.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">Consulta Ginecológica</h5>
                  <p className="card-text">Consulta especializada para la mujer en todas sus etapas de vida</p>

              </div>
          </div>


          <div className="card" >
              <img src="img/servicios/icono2.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">Toma de Citologías</h5>
                  <p className="card-text">Evaluación para prevenir y detectar enfermedades y lesiones precancerosas</p>

              </div>
          </div>


          <div className="card" >
              <img src="img/servicios/icono3.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">Planificación Familiar</h5>
                  <p className="card-text">Diversas estrategias para ayudar a las familias a lograr un mejor nivel de vida</p>

              </div>
          </div>



          <div className="card" >
              <img src="img/servicios/icono4.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">Ecografías</h5>
                  <p className="card-text">Visualización de los órganos genitales femeninos y ecos obstétricos</p>

              </div>
          </div>



          <div className="card" >
              <img src="img/servicios/icono5.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">Menopausia</h5>
                  <p className="card-text">Diagnóstico y tratamiento de la Menopausia fisiológica, iatrogénica y precoz</p>

              </div>
          </div>



          <div className="card" >
              <img src="img/servicios/icono6.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">Detección de VPH</h5>
                  <p className="card-text">Estudios dirigidos a la identificación del VPH: colposcopia</p>

              </div>
          </div>

      </div>
    </main>
    )
  }
  }
