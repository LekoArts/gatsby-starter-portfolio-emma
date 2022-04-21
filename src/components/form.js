import React from 'react'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

import FormInputs from './form-inputs'
import FormControls from './form-controls'
import SuccessMessage from './success-message'
import ErrorMessage from './error-message'

const Form = () => (
  <NetlifyForm name='Contact' action='/thanks' honeypotName='bot-field'>
    {({ handleChange, success, error }) => (
      <section>
        {!success ? (
          <>
            {error && <ErrorMessage />}

            <Honeypot
              name='bot-field'
              label='Leave the following field empty:'
            />

            <FormInputs onChange={handleChange} />
            <FormControls />
          </>
        ) : (
          <SuccessMessage />
        )}
      </section>
    )}
  </NetlifyForm>
)

export default Form
