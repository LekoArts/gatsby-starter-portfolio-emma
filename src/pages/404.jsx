import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from '../components'

const NotFoundPage = ({ location }) => (
  <Layout pathname={location.pathname}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
}
