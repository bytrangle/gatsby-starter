// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   const localFilePattern = /\/local\/.+\//
//   const forestryFilePattern = /\/forestry\/.+/
//   const { fileAbsolutePath } = node
//   if (fileAbsolutePath) {
//     console.log(
//       `${fileAbsolutePath} --- ${fileAbsolutePath.match(localFilePattern)}`
//     )
//   }
//   let slug
//   if (node.internal.type === `MarkdownRemark`) {
//     const regex = /^\/[^/]+/g
//     const fullPath = createFilePath({ node, getNode })
//     slug = fullPath.replace(regex, "")
//     console.log(`Slug: ${slug}`)
//     createNodeField({
//       node,
//       name: `slug`,
//       value: `/blog${slug}`,
//     })
//   }
// }

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: path.resolve(`./src/templates/blog-post.js`),
//       context: {
//         // Data passed to context is available
//         // in page queries as GraphQL variables.
//         slug: node.fields.slug,
//       },
//     })
//   })
// }
