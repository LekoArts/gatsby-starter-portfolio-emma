import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import sample from 'lodash/sample'
import Layout from '../components/Layout'
import ProjectItem from '../components/ProjectItem'
import { overlay } from '../../config/theme'

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
      {projectEdges.map(({ node }) => {
        const overlayColor = sample(overlay)
        return <ProjectItem node={node} color={overlayColor} />
      })}
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            service
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
