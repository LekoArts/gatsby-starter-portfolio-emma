import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import 'typeface-merriweather'
import 'typeface-roboto'
import SEO from './SEO'
import Navigation from './Navigation'
import Footer from './Footer'
import theme from '../../config/theme'
import reset from '../styles/reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Merriweather", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  .nav-active {
    color: ${theme.brand.primary} !important;
  }
`

const Layout = ({ children, pathname, customSEO }) => (
  <ThemeProvider theme={theme}>
    <>
      {!customSEO && <SEO pathname={pathname} />}
      <GlobalStyle />
      <noscript>To browse this site, please enable JavaScript.</noscript>
      <Navigation />
      {children}
      <Footer />
    </>
  </ThemeProvider>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  pathname: PropTypes.string.isRequired,
  customSEO: PropTypes.bool,
}

Layout.defaultProps = {
  customSEO: false,
}
