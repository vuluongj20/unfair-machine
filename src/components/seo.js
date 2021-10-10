import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, ogImage, background }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      style={[{ cssText: `body {background-color: ${background};}` }]}
      title={title ? `${title} - (Un)Fair Machine` : `(Un)Fair Machine`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: title ? `${title} - (Un)Fair Machine` : `(Un)Fair Machine`,
        },
        {
          property: `og:image`,
          content: ogImage
            ? `https://res.cloudinary.com/vuluongj20/image/upload/c_scale,f_auto,q_auto,w_1200/v1/${ogImage}`
            : site.siteMetadata.siteUrl + site.siteMetadata.image,
        },
        {
          property: `og:image:width`,
          content: 1200,
        },
        {
          property: `og:image:height`,
          content: 630,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title ? `${title} - (Un)Fair Machine` : `(Un)Fair Machine`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  background: `#1A1A1A`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  ogImage: PropTypes.string,
  background: PropTypes.string,
}

export default SEO
