import React from "react";
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
      <SEO title="About Page" />
      <h1>About page</h1>
      
    <Link to="/">Home</Link>
    </Layout>
)

export default AboutPage;