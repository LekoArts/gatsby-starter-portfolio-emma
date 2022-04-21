import React from 'react'
import { Textarea, Input, Label } from 'theme-ui'

const LabeledInput = ({ as = Input, label, ...props }) => {
  const name = label.toLowerCase()
  const Component = as
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Component name={name} id={name} {...props} />
    </>
  )
}

const FormInput = ({ ...props }) => (
  <>
    <LabeledInput
      label='Name'
      type='text'
      required
      placeholder='Enter your name'
      {...props}
    />
    <LabeledInput
      label='Email'
      type='email'
      required
      placeholder='Enter your email'
      {...props}
    />
    <LabeledInput
      label='Message'
      as={Textarea}
      required
      minLength={10}
      rows={5}
      placeholder='Leave a message here'
      {...props}
    />
  </>
)

export default FormInput
