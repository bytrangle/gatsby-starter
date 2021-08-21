// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import Img from "gatsby-image"

// export default function BlogPost({ data }) {
//   const post = data.markdownRemark
//   const { frontmatter } = post
//   const featuredImageFluid =
//     frontmatter.featuredImage.path.childImageSharp.fluid
//   const title = frontmatter.featuredImage.title
//   return (
//     <Layout>
//       <div>
//         <h1>{post.frontmatter.title}</h1>
//         <Img fluid={featuredImageFluid} />
//         {title && <span dangerouslySetInnerHTML={{ __html: title }} />}
//         <div dangerouslySetInnerHTML={{ __html: post.html }} />
//       </div>
//     </Layout>
//   )
// }
// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         featuredImage {
//           path {
//             childImageSharp {
//               fluid(maxWidth: 800) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           title
//         }
//       }
//     }
//   }
// `
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout pageTitle={post.frontmatter.title}>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
