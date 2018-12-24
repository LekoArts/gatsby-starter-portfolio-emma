import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { animated, Spring, config } from 'react-spring'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { SEO, Container, Layout, Hero, BGImage } from '../components'

const Content = styled(Container)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
  z-index: 3;
`

const Title = styled(animated.h1)`
  margin-top: 0;
`

const Single = ({ pageContext: { slug }, data: { mdx } }) => {
  const single = mdx.frontmatter
  return (
    <Layout>
      <SEO postPath={slug} postNode={mdx} postSingle />
      <Hero single>
        <BGImage single>
          <Img fluid={single.cover.childImageSharp.fluid} alt="" />
        </BGImage>
        <Content type="text">
          <Spring
            native
            config={config.slow}
            from={{ opacity: 0, transform: 'translate3d(0, -30px, 0)' }}
            to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
          >
            {props => <Title style={props}>{single.title}</Title>}
          </Spring>
        </Content>
      </Hero>
      <Container type="text">
        <Spring native config={config.slow} delay={500} from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => (
            <animated.div style={props}>
              <MDXRenderer>{mdx.code.body}</MDXRenderer>
            </animated.div>
          )}
        </Spring>
      </Container>
    </Layout>
  )
}

export default Single

Single.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      fields {
        slug
      }
      excerpt
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 800) {
              src
            }
          }
        }
      }
    }
  }
`
