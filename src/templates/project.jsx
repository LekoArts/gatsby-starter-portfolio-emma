import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'
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

const Project = ({ data: { mdx: postNode }, location }) => {
  const project = postNode.frontmatter

  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  const infoProps = useSpring({ config: config.slow, delay: 500, from: { opacity: 0 }, to: { opacity: 1 } })
  const contentProps = useSpring({ config: config.slow, delay: 1000, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout pathname={location.pathname} customSEO>
      <SEO pathname={location.pathname} postNode={postNode} article />
      <Hero>
        <BGImage customcolor={project.color}>
          <Img fluid={project.cover.childImageSharp.fluid} alt="" />
        </BGImage>
        <Content type="text">
          <Title data-testid="project-title" style={titleProps}>
            {project.title}
          </Title>
          <InformationWrapper style={infoProps}>
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
        </Content>
      </Hero>
      <Container type="text">
        <animated.div style={contentProps}>
          <MDXRenderer>{postNode.code.body}</MDXRenderer>
        </animated.div>
      </Container>
    </Layout>
  )
}

export default Project

Project.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
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
      parent {
        ... on File {
          mtime
          birthtime
        }
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
