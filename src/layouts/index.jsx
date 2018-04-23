import React from 'react';
import Helmet from 'react-helmet';
import Navigation from '../components/Navigation/Navigation';
import SEO from '../components/SEO/SEO';
import config from '../../config/SiteConfig';
import '../utils/emma.scss';

import favicon from './favicon.png';
import appleTouchIcon from './apple-touch-icon.png';

const MainLayout = props => {
  const { children } = props;
  return (
    <React.Fragment>
      <Helmet>
        <html lang={config.siteLanguage} />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0" />
        <link rel="shortcut icon" href={favicon} />
        <link rel="apple-touch-icon" href={appleTouchIcon} />
        <title>{config.siteTitle}</title>
      </Helmet>
      <SEO />
      <Navigation />
      {children()}
    </React.Fragment>
  );
};

export default MainLayout;
