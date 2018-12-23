import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/SEO'
import Container from '../components/Container'
import Layout from '../components/Layout'
import { overlay } from '../../config/theme'

const Hero = styled.section`
  position: relative;
  margin-top: -6rem;
  height: 40vw;
  overflow: hidden;
`

const BGImage = styled.div`
  width: 100%;
  .gatsby-image-wrapper {
    position: static !important;
    filter: grayscale(100%);
    > div {
      padding-bottom: 40vw !important;
    }
  }
  &:before {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    background-color: ${props => props.customcolor};
  }
  &:after {
    backface-visibility: hidden;
    background: ${({ theme }) => `linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, ${theme.colors.bg_color} 100%),
      linear-gradient(to right, rgba(255, 255, 255, 0.4) 50%, ${theme.colors.bg_color} 100%)`};
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

const Content = styled(Container)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.spacer.vertical} ${props => props.theme.spacer.horizontal} 0 0;
  div:first-child {
    text-transform: uppercase;
  }
`

const Project = ({ pageContext: { slug }, data: { mdx: postNode } }) => {
  const project = postNode.frontmatter
  return (
    <Layout>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Hero>
        <BGImage customcolor={overlay[project.color]}>
          <Img fluid={project.cover.childImageSharp.fluid} alt="" />
        </BGImage>
        <Content type="text">
          <h1>{project.title}</h1>
          <InformationWrapper>
            <InfoBlock>
              <div>Client</div>
              <div>{project.client}</div>
            </InfoBlock>
            <InfoBlock>
              <div>Date</div>
              <div>{project.date}</div>
            </InfoBlock>
            <InfoBlock>
              <div>Service</div>
              <div>{project.service}</div>
            </InfoBlock>
          </InformationWrapper>
        </Content>
      </Hero>
      <Container type="text">
        <MDXRenderer>{postNode.code.body}</MDXRenderer>
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
      fields {
        slug
      }
    }
  }
`
