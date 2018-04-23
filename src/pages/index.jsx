import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import ProjectListing from '../components/ProjectListing/ProjectListing';
import Footer from '../components/Footer/Footer';

const Index = props => {
  const projectEdges = props.data.allMarkdownRemark.edges;
  return (
    <div className="container index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <div>
        <ProjectListing projectEdges={projectEdges} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            service
            client
            cover {
              childImageSharp {
                sizes(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
