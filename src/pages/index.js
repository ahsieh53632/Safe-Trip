import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/Header/Header"
import Image from "../components/image"
import SEO from "../components/seo"
import LoginPage from "../pages/LoginPage"
import Check from "./LoginPage/Check"

const IndexPage = () => (
  <Layout>
    <LoginPage/>
    <div id="talk"></div>

   </Layout>
)
export default IndexPage

