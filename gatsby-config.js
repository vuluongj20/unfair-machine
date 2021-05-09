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
        background_color: `#FFFFFF`,
        theme_color: `#F9A21F`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-R41LY9Z1ML"
        ],
      },
    },
    `gatsby-plugin-sass`
  ],
}
