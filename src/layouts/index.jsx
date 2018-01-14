import React from 'react';
import Helmet from 'react-helmet';
import Navigation from '../components/Navigation/Navigation';
import SEO from '../components/SEO/SEO';
import config from '../../config/SiteConfig';
import '../utils/emma.scss';

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <SEO />
      <Navigation />
      {children()}
    </div>
  );
};

export default MainLayout;
