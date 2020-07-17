import React from "react"
import { Link } from "gatsby"
import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import Layout from "../components/layout"
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
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
