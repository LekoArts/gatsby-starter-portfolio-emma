import React from 'react';
import Helmet from 'react-helmet';
import { Fade } from 'react-reveal';
import Palette from 'react-palette';
import config from '../../config/SiteConfig';
import SEO from '../components/SEO/SEO';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';
import styles from './project.module.scss';

const Project = props => {
  const { slug } = props.pathContext;
  const postNode = props.data.markdownRemark;
  const project = postNode.frontmatter;
  const imageURL = project.cover.childImageSharp.resize.src;
  if (!project.id) {
    project.id = slug;
  }
  return (
    <div className="container project-container">
      <Helmet title={`${project.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <div className={styles.headerWrapper}>
        <Palette image={imageURL}>
          {palette => (
            <section className={styles.header} style={{ backgroundColor: palette.vibrant }}>
              <div className={styles.title}>
                <Fade down duration={1250} tag="h1">
                  {project.title}
                </Fade>
              </div>
              <div className={styles.information}>
                <div className={styles.infoBlock}>
                  <Fade up duration={1250} className={styles.top}>
                    {config.client}
                  </Fade>
                  <Fade up duration={1250} delay={500} className={styles.bottom}>
                    {project.client}
                  </Fade>
                </div>
                <div className={styles.infoBlock}>
                  <Fade up duration={1250} className={styles.top}>
                    {config.date}
                  </Fade>
                  <Fade up duration={1250} delay={500} className={styles.bottom}>
                    {project.date}
                  </Fade>
                </div>
                <div className={styles.infoBlock}>
                  <Fade up duration={1250} className={styles.top}>
                    {config.service}
                  </Fade>
                  <Fade up duration={1250} delay={500} className={styles.bottom}>
                    {project.service}
                  </Fade>
                </div>
              </div>
            </section>
          )}
        </Palette>
      </div>
      <Container>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: postNode.html }} />
      </Container>
      <Footer />
    </div>
  );
};

export default Project;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        client
        service
        cover {
          childImageSharp {
            resize(width: 800) {
              src
            }
          }
        }
      }
      fields {
        slug
      }
      excerpt
    }
  }
`;
