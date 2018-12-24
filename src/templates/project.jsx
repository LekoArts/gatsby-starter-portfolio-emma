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

const InformationWrapper = styled(animated.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const Title = styled(animated.h1)`
  margin-top: 0;
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem 0 0;
  div:first-child {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${props => (props.customcolor ? props.customcolor : props.theme.colors.grey)};
  }
  div:last-child {
    font-size: 1rem;
  }
`

const Project = ({ pageContext: { slug }, data: { mdx: postNode } }) => {
  const project = postNode.frontmatter
  return (
    <Layout>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Hero>
        <BGImage customcolor={project.color}>
          <Img fluid={project.cover.childImageSharp.fluid} alt="" />
        </BGImage>
        <Content type="text">
          <Spring
            native
            config={config.slow}
            from={{ opacity: 0, transform: 'translate3d(0, -30px, 0)' }}
            to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
          >
            {props => <Title style={props}>{project.title}</Title>}
          </Spring>
          <Spring native config={config.slow} delay={500} from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {props => (
              <InformationWrapper style={props}>
                <InfoBlock customcolor={project.color}>
                  <div>Client</div>
                  <div>{project.client}</div>
                </InfoBlock>
                <InfoBlock customcolor={project.color}>
                  <div>Date</div>
                  <div>{project.date}</div>
                </InfoBlock>
                <InfoBlock customcolor={project.color}>
                  <div>Service</div>
                  <div>{project.service}</div>
                </InfoBlock>
              </InformationWrapper>
            )}
          </Spring>
        </Content>
      </Hero>
      <Container type="text">
        <Spring native config={config.slow} delay={1000} from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => (
            <animated.div style={props}>
              <MDXRenderer>{postNode.code.body}</MDXRenderer>
            </animated.div>
          )}
        </Spring>
      </Container>
    </Layout>
  )
}

export default Project

Project.propTypes = {
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
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        client
        color
        service
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
