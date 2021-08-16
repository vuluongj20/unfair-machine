module.exports = {
  siteMetadata: {
    title: `(Un)Fair Machine`,
    description: `Machine Learning Fairness, explained`,
    author: `Vu Luong`,
    siteUrl: `https://unfair-machine.vuluong.me`,
    image: `/images/og.png`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vu Luong`,
        short_name: `Vu`,
        start_url: `/`,
        background_color: `#1A1A1A`,
        theme_color: `#1A1A1A`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mixpanel`,
      options: {
        apiToken: `01ba9aaafc811c22cac104df052ca61f`,
        enableOnDevMode: false,
        pageViews: {
          "/": `Page view - Home`,
          "/blinding": `Page View - Blinding`,
          "/equal-outcome": `Page View - Equality of Outcome`,
          "/equal-opportunity": `Page View - Equality of Opportunity`,
        },
      },
    },
    `gatsby-plugin-sass`,
  ],
}
