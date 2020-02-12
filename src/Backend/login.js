import React, { Component } from 'react'

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase';
import PropTypes from 'prop-types';

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {usuario: '',
                  clave: '',
                  errorAlIngresar : false
                };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    /*firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });*/
  }

  handleChange = (e) => {
    const { name, value } = e.target//Propiedades del input
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { usuario, clave } = this.state
    var thisClass = this;
    thisClass.setState({ errorAlIngresar: false })

    firebase.auth().signInWithEmailAndPassword(usuario, clave).catch(function(error) {
      // Handle Errors here.
      //var errorCode = error.code;
    //  var errorMessage = error.message;
      // ...
      thisClass.setState({ errorAlIngresar: true })
    });
  }

  render () {
    const { usuario, clave, errorAlIngresar } = this.state
    return (
      <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Giogin</h3></div>
                                    <div className="card-body">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                              <label className="small mb-1" for="inputEmailAddress">Email</label>
                                              <input className="form-control py-4" value={usuario} name="usuario" type="email" placeholder="Enter email address" onChange={this.handleChange}/>
                                            </div>

                                            <div className="form-group">
                                                <label className="small mb-1" for="inputPassword">Password</label>
                                                <input className="form-control py-4" value={clave} name="clave" type="password" placeholder="Enter password" onChange={this.handleChange}/>
                                            </div>

                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox d-none">
                                                    <input className="custom-control-input" id="rememberPasswordCheck" type="checkbox" />

                                                    <label className="custom-control-label" for="rememberPasswordCheck">Remember password</label>
                                                </div>
                                            </div>
                                            <div className="form-group d-flex align-items-center justify-content-center mt-4 mb-0 d-none">
                                            <button className="btn btn-primary" type="submit">Ingresar</button></div>
                                            {
                                              errorAlIngresar ?
                                              <span>Error al ingresar, vuelva a intentarlo</span>
                                              :
                                              <span></span>
                                            }
                                        </form>
                                    </div>
                                    <div className="card-footer text-center d-none">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid">
                        <div className="d-flex align-items-center justify-content-between small">

                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
  }
}


const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider : new firebase.auth.GoogleAuthProvider()
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Login)
