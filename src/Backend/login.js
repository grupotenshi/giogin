import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase';

//Material ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://healthiergaby.com/">
        healthiergaby
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {usuario: '',
                  clave: '',
                  errorAlIngresar : false
                };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    firebase.auth().onAuthStateChanged(function(user) {
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
    });
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
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      thisClass.setState({ errorAlIngresar: true })
    });
  }



  render(){
    const { classes } = this.props;
    const { user, signOut } = this.props
    const { usuario, clave, errorAlIngresar } = this.state
    return (
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                {
                  errorAlIngresar ?
                  <span>Error al ingresar, vuelva a intentarlo</span>
                  :
                  <span></span>
                }
                <form className={classes.form} noValidate  onSubmit={this.handleSubmit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="usuario"
                    label="Email Address"
                    name="usuario"
                    autoComplete="email"
                    autoFocus
                    value={usuario}
                    onChange={this.handleChange}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="clave"
                    label="Password"
                    type="password"
                    id="clave"
                    autoComplete="current-password"
                    value={clave}
                    onChange={this.handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}

                  >
                    Iniciar sesión
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Box mt={5}>
                    <Copyright />
                  </Box>
                </form>
              </div>
            </Grid>
          </Grid>
    );
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
})(withStyles(styles)(Login))
