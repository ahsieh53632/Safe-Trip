import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout.js"
import SEO from "../../components/seo.js"

const Check = () => (
  <Layout>
    <SEO title="Page 2" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page Check</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Check