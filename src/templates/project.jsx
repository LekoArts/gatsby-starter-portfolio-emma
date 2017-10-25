import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'

export default class Project extends React.Component {
  render() {
    const postNode = this.props.data.markdownRemark
    return (
      <div className="container project-container">
        <div className="project-content" dangerouslySetInnerHTML={{ __html: postNode.html }} />
      </div>
    )
  }
}

export const pageQuery = graphql`
query ProjectPostBySlug($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      date
      customer
      service
    }
    fields {
      slug
    }
  }
}
`