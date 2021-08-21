import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout pageTitle="Home Page">
      <p>This is up to part 2 of Gatsby's tutorial for getting started.</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date_published], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date_published(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
