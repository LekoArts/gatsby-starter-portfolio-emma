import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled.footer`
  margin: 5rem 0;
  padding: 1rem ${props => props.theme.spacer.horizontal};
  text-align: center;
  a {
    text-decoration: none;
    color: ${props => props.theme.brand.primary};
  }
`;

const Footer = () => (
  <Wrapper>
    Copyright &copy; 2018. All right reserved. Pictures by Unsplash.{' '}
    <a href="https://github.com/LekoArts/gatsby-starter-portfolio-emma">Emma Theme</a> {' by '}{' '}
    <a href="https://www.lekoarts.de">LekoArts</a>.
  </Wrapper>
);

export default Footer;
