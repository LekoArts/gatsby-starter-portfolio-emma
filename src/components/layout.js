import React from 'react'
import { Container } from 'theme-ui'

const Layout = ({ children }) => (
  <Container p={[3, null, 4]}>{children}</Container>
)

export default Layout
