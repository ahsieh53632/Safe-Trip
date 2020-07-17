import React from "react"
import { Link } from "gatsby"
import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import Layout from "../components/layout"
import Header from "../components/Header/Header"
import Image from "../components/image"
import SEO from "../components/seo"
import LoginPage from "./LoginPage/LoginPage.jsx";
let hist = createMemoryHistory();



export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LoginPage} />
      {/* <Route path="/schedule-page" component={SchedulePage} />
      <Route path="/map-page" component={MapPage} />
      <Route path="/main-page" component={MainPage} /> */}
    </Switch>
  </Router>
);

const IndexPage = () => (
  <Layout>
    <LoginPage/>
    <div id="talk"></div>

   </Layout>
)
export default IndexPage

