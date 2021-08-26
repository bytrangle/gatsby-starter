/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 600,
              },
            }
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
        data: `@use "src/styles/variables" as var;`,
      },
    },
  ],
}
