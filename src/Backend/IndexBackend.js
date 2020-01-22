
import React from "react";
import ReactDOM from "react-dom";
import { createHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "./layouts/Admin.js";
import RTL from "./layouts/RTL.js";

import "./assets/css/material-dashboard-react.css?v=1.8.0";

var hist = require('history').createHistory
 

export default (
  <Router history={hist}>
    <Switch>
      <Route path="/Backend/admin" component={Admin} />
      <Route path="/Backend/rtl" component={RTL} />
      <Redirect from="/Backend" to="/Backend/admin/dashboard" />
    </Switch>
  </Router>
);
