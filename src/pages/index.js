import React from "react"
import { Link } from "gatsby"
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import MainPage from "./MainPage/MainPage.jsx"
import LoginPage from "./LoginPage.jsx";
import GetQRcode from "./MainPage/GetQRcode.jsx";
let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LoginPage} />
      <Route path="/MainPage" component={MainPage} />
      <Route path="/MainPage" component={GetQRcode} />
      {/*<Route path="/map-page" component={MapPage} />
      <Route path="/main-page" component={MainPage} /> */}
    </Switch>
  </Router>
);


