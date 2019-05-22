module.exports = {
  siteMetadata: {
    title: `GatsbyJS Typescript complex starter`,
    description: `This is a complex GatsbyJS configuration. It's prepared for TypeScript and it's fully integrated with: eslint, stylelint, prettier, styled-components, root imports, commit hooks (husky) and jest. Tested with WebStorm v.2019.1.2 & VS Code v.1.34.0`,
    author: `@panmirek`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS Typescript complex starter`,
        short_name: `gatsby-typescript-complex`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
