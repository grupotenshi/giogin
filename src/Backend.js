import React from 'react';
import './Backend/Backend.css';

import { Router, Route, Switch, Redirect } from "react-router-dom";

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from "firebase";
import 'firebase/auth';
import firebaseConfig from './firebase';

import Login from './Backend/login.js';
import Admin from './Backend/layouts/Admin.js';
import "./Backend/assets/css/material-dashboard-react.css?v=1.8.0";

import { createBrowserHistory } from "history";

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const hist = createBrowserHistory();

class Backend extends React.Component {

  constructor(props) {
    super(props);
    this.state = {usuario: '',
                };

  /*  firebase.auth().onAuthStateChanged(function(user) {
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




  render(){
    const { user, signOut } = this.props
    const { usuario, clave } = this.state
    return (

      <div>
        {
          user ?
          <Router history={hist}>
          <Switch>
            <Route path="/Backend/admin"  component={Admin} />
            <Redirect from="/Backend" to="/Backend/admin/dashboard" />
          </Switch>
        </Router>
          :
          <Login/>
        }

      </div>

    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider : new firebase.auth.GoogleAuthProvider()
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Backend)
