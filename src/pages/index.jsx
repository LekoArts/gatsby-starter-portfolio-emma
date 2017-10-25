import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import SEO from '../components/SEO/SEO'
import ProjectListing from '../components/ProjectListing/ProjectListing'

export default class Index extends React.Component {
  render() {
    const projectEdges = this.props.data.allMarkdownRemark.edges
    return (
      <div className="container index-container">
        <Helmet>
          <title>{config.siteTitle}</title>
        </Helmet>
        <div>
          <ProjectListing projectEdges={projectEdges} />
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            service
            customer
            cover {
              childImageSharp {
                sizes(maxWidth: 900, quality: 90) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`