/* eslint react/display-name: 0 */
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Trail } from 'react-spring'
import styled from 'styled-components'
import { Layout, ProjectItem } from '../components'

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  width: 100%;
`

const Index = ({
  data: {
    allMdx: { edges: projectEdges },
  },
}) => (
  <Layout>
    <ListWrapper>
      <Trail
        native
        items={projectEdges}
        keys={project => project.node.fields.slug}
        from={{ height: '0%' }}
        to={{ height: '100%' }}
      >
        {project => props => <ProjectItem style={props} key={project.node.fields.slug} node={project.node} />}
      </Trail>
    </ListWrapper>
  </Layout>
)

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "projects" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            service
            color
            client
            cover {
              childImageSharp {
                fluid(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
