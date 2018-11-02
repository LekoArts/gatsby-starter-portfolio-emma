import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';

const Contact = () => (
  <Layout>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>
      <>
        <h1>Contact</h1>
      </>
    </Header>
    <Container type="text">
      <h2>Contact me!</h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
        texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A
        small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
        paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing
        has no control about the blind texts it is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to
        do so, because there were thousands.
      </p>
    </Container>
  </Layout>
);

export default Contact;
