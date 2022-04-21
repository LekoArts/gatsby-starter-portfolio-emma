/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import Layout from './layout'
import Header from './header'
import Intro from './intro'
import Form from './form'
import Details from './details'
import Socials from './socials'

const ContactPage = () => (
  <Layout>
    <section
      sx={{
        mb: 3,
        display: 'grid',
        gridTemplateColumns: [`auto`, null, `2fr 1fr`],
        gridTemplateRows: [`auto`],
        gridTemplateAreas: [
          `
        "header"
        "form"
        "details"
        `,
          null,
          `
        "header header"
        "form details"
        `
        ]
      }}
    >
      <div sx={{ gridArea: `header`, mb: [1, null, 3] }}>
        <Header />
      </div>
      <div sx={{ gridArea: `form`, pr: [0, null, 5] }}>
        <Intro />
        <Form />
      </div>
      <aside
        sx={{
          gridArea: `details`,
          pl: [0, null, 5],
          borderLeft: [null, null, '2px solid'],
          borderLeftColor: [null, null, 'muted'],
          mt: [3, null, 0],
          pt: [3, null, 0],
          borderTop: ['1px solid', null, 'none'],
          borderTopColor: ['muted', null, null]
        }}
      >
        <Details />
        <Socials />
      </aside>
    </section>
  </Layout>
)

export default ContactPage
