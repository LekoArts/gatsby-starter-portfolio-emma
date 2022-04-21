/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import Layout from './layout'
import SuccessMessage from './success-message'

const Success = () => (
  <Layout>
    <section sx={{ textAlign: 'center' }}>
      <SuccessMessage />
    </section>
  </Layout>
)

export default Success
