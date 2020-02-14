import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
export default class Home extends Component {

  render() {
    return(
      <main>

        <div className="container d-none d-lg-block">
            <div className="row">
                <div className="col align-self-center">La Dra. Giovanna Oliveros, Médico especialista en Ginecología y Obstetricia tiene más de 20 años dedicando sus conocimientos y experiencia al cuidado de la salud de la mujer en Venezuela. En lo que se refiere a Ginecología, se dispone de un protocolo de actuación eficaz y exhaustivo en la detección y tratamiento de enfermedades funcionales (trastornos ováricos entre otros), con el objetivo de conseguir un diagnóstico rápido basado en pruebas obtenidas a través de la más avanzada tecnología (exploración ecográfica, endoscopia ginecológica, laparoscopia, citologías entre otros).</div>
                <div className="col d-none d-lg-block animated fadeIn">
                    <img src="img/home.png" width="100%" alt=""/>
                </div>
            </div>
        </div>

    <section className="imagen-contacto d-none d-lg-block">
        <div className="contenido-anuncio">
          <NavLink exact to="/Citas" className="movilebtn2">Cita</NavLink>
        </div>
    </section>


    <div id="carouselExampleIndicators" className="carousel slide carousel-fade mb-5 d-none d-lg-block" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-flex w-50 mx-auto" src="img/peso.png" alt="First slide"/>
          <div className="carousel-caption d-none d-md-block ">
            <h2>¿El implante engorda?</h2>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-flex w-50 mx-auto" src="img/vph.png" alt="Second slide"/>
          <div className="carousel-caption d-none d-md-block text-dark font-weight-bold">
            <h1>Todo sobre el VPH</h1>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-flex w-50 mx-auto" src="img/menstruacion.png" alt="Third slide"/>
          <div className="carousel-caption d-none d-md-block txt-dark">
            <h3 className='text-dark'>5 cosas que quizas no sabias de la menstruación</h3>

          </div>
        </div>
        <div className="carousel-item ">
          <img className="d-flex w-50 mx-auto" src="img/cumple.png" alt="Third slide"/>
          <div className="carousel-caption d-none d-md-block txt-dark">
            <h3 className='text-dark'>10 pasos para organizar una fiesta infantil</h3>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    <div className="seccion-inferior contenedor seccion">
        <section className="blog">
            <article className="entrada-blog">
            </article>
        </section>
    </div>
    <div>
    </div>

    <div className="movile  d-lg-none">
      <NavLink exact to="/Citas" className="movilebtn">Citas</NavLink>
    </div>

    </main>
    )
  }
  }
