import React from "react"
import { Link } from "gatsby"
import {createMemoryHistory} from "history";
import {Route, HashRouter as Router, Switch} from "react-router-dom";
import ReactDOM from 'react-dom';
import 'typeface-roboto'

import createBrowserHistory from 'history/createBrowserHistory';
import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';


import MainPage from "./MainPage/MainPage.jsx"
import LoginPage from "./LoginPage.jsx";
import ScanQR from "./scanCode.jsx"

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/scanCode/:id">
        <ScanQR />
      </Route>
    </Switch>
  </Router>
);


