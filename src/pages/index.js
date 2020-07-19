import React from "react"
import { Link, navigate } from "gatsby"
import {createMemoryHistory} from "history";
import 'typeface-roboto'
import { Router } from "@reach/router"

import createBrowserHistory from 'history/createBrowserHistory';
import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';


import MainPage from "./MainPage/MainPage.jsx"
import LoginPage from "./LoginPage.jsx";

export default () => (
  <Router basepath="/">
    <LoginPage path="/" />
  </Router>
);

// class Index extends React.Component {

//   render () {
//     var current_url = window.location.href;
//     console.log(current_url);
//     const regex = /\/scanCode\/(.*)\/(.*)$/;

//     var result = current_url.match(regex);

//     if (result.length > 0) {
//       console.log('validating');
//       <ScanQR />
//     } else {
//       navigate('./MainPage/MainPage')
//     }

//     return (
//       <h4>Ther's probably an erorr</h4>
//     )
//   }
// }

// export default Index;