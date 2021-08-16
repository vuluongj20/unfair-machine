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
          "/": `------ Home`,
          "/blinding": `------ Blinding`,
          "/equal-outcome": `------ Equality of Outcome`,
          "/equal-opportunity": `------ Equality of Opportunity`,
        },
      },
    },
    `gatsby-plugin-sass`,
  ],
}
