import React from 'react'
import { Link } from 'gatsby'
import { FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa'
import styled from 'styled-components'
import config from '../../config/website'

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  padding: 1rem 0 3rem 0;
  a {
    color: ${props => props.theme.colors.body_color};
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    z-index: 100;
    &:hover {
      color: ${props => props.theme.brand.primary};
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 1rem 0 3rem 0;
    flex-wrap: wrap;
  }
`

const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  padding: 0 ${props => props.theme.spacer.horizontal};
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 2;
  }
`

const Name = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  a {
    font-size: 1.25rem;
    font-family: 'Merriweather', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 700;
    &:hover,
    &:focus {
      color: ${props => props.theme.colors.body_color};
      text-decoration: none;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 1;
    flex: 1 0 100%;
    margin-bottom: 0.75rem;
  }
`

const SocialMedia = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 0 ${props => props.theme.spacer.horizontal};
  a {
    font-size: 1.25rem;
    line-height: 20px;
  }
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 3;
  }
`

const Navigation = () => (
  <Wrapper>
    <Nav>
      <Link to="/about" activeClassName="nav-active">
        About
      </Link>
      <Link to="/contact" activeClassName="nav-active">
        Contact
      </Link>
    </Nav>
    <Name>
      <Link to="/">{config.siteTitle}</Link>
    </Name>
    <SocialMedia>
      <a href="https://www.instagram.com/lekoarts.de" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.behance.net/lekoarts" target="_blank" rel="noopener noreferrer">
        <FaBehance />
      </a>
      <a href="https://dribbble.com/LeKoArts" target="_blank" rel="noopener noreferrer">
        <FaDribbble />
      </a>
    </SocialMedia>
  </Wrapper>
)

export default Navigation
