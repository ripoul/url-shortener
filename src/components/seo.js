import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function SEO ({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title=`${ title } | ${ data.site.siteMetadata.title }`
            titleTemplate={`%s | ${ data.site.siteMetadata.title }`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                name: `title`,
                content: `${ title } | ${ data.site.siteMetadata.title }`
              },
              {
                property: `og:title`,
                content: `${ title } | ${ data.site.siteMetadata.title }`
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                property: `og:url`,
                content: data.site.siteMetadata.siteUrl
              },
              {
                property: `og:image`,
                content: data.site.siteMetadata.siteUrl + 
                  data.allFile.edges[0].node.publicURL
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: `${ title } | ${ data.site.siteMetadata.title }`
              },
              {
                name: `twitter:description`,
                content: metaDescription
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                    name: `keywords`,
                    content: keywords.join(`, `)
                  }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        icon
      }
    }
    allFile (filter: {name: {eq:"fav-icon"}}){
      edges {
        node{
          publicURL
        }
      }
    }
  }
`
