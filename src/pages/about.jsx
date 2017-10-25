import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'

export default class About extends React.Component {
  render() {
    return (
      <div className="container about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <div>
          <h1>About</h1>
        </div>
      </div>
    )
  }
}