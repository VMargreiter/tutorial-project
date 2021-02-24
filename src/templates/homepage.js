import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import './styles.scss'


const homepage = () => {
  return(
    <Layout>
      <h1 class="hero-text">Hey gang</h1>
      <p>Welcome to your new Gatsby site.</p>
    </Layout>
  )
}

export const allPages = graphql`
  query allPages {
    allWpPage {
      nodes {
        id
      }
    }
  }
`

export default homepage
