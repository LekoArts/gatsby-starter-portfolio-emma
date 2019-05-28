import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  margin: 6rem 0 1rem 0;
  padding: 1rem ${props => props.theme.spacer.horizontal};
  text-align: center;
  color: ${props => props.theme.colors.grey};
  a {
    text-decoration: none;
    color: ${props => props.theme.brand.primary};
  }
`

const Footer = () => (
  <Wrapper data-testid="footer">
    Copyright &copy; 2019. All right reserved. Pictures by Unsplash.{' '}
    <a href="https://github.com/LekoArts/gatsby-starter-portfolio-emma">Emma Starter</a> {' by '}{' '}
    <a href="https://www.lekoarts.de/en">LekoArts</a>.
  </Wrapper>
)

export default Footer
