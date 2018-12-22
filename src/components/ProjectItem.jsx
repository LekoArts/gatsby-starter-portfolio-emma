import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Item = styled.div`
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

const Content = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  a {
    color: #fff;
    height: 100%;
    left: 0;
    opacity: 0;
    padding: 2rem;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
      color: #fff;
      opacity: 1;
      text-decoration: none;
    }
  }
`

const ImageWrapper = styled.div`
  > div {
    height: 100%;
    left: 0;
    position: absolute !important;
    top: 0;
    width: 100%;

    > div {
      position: static !important;
    }
  }
`

const Overlay = styled.div`
  background-color: ${props => props.theme.brand.primary};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`

const ProjectItem = ({ node, color }) => (
  <Item key={node.fields.slug}>
    <Content>
      <ImageWrapper>
        <Img fluid={node.frontmatter.cover.childImageSharp.fluid} />
      </ImageWrapper>
      <Link to={node.fields.slug}>
        <Overlay style={{ backgroundColor: color }} />
        <h2>{node.frontmatter.client}</h2>
        <div>{node.frontmatter.service}</div>
      </Link>
    </Content>
  </Item>
)

export default ProjectItem

ProjectItem.propTypes = {
  node: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
}
