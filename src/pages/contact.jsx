import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'

export default class Contact extends React.Component {
  render() {
    return (
      <div className="container contact-container">
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <div>
          <h1>Contact</h1>
        </div>
      </div>
    )
  }
}