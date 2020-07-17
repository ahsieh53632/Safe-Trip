import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout.js"
import SEO from "../../components/seo.js"

const MyQRcode = () => (
  <Layout>
    <SEO title="Page 2" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page MyQRcode</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MyQRcode