import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacer.horizontal};
  max-width: ${props => props.theme.container[props.type]};
  ${props =>
    props.type === 'text' &&
    css`
      p {
        font-size: 1.2rem;
        letter-spacing: -0.003em;
        line-height: 1.58;
        --baseline-multiplier: 0.179;
        --x-height-multiplier: 0.35;
        @media (max-width: ${props.theme.breakpoints.l}), (max-device-width: ${props.theme.breakpoints.l}) {
          font-size: 1.1rem;
        }
        @media (max-width: ${props.theme.breakpoints.m}), (max-device-width: ${props.theme.breakpoints.m}) {
          font-size: 1rem;
        }
      }
    `};
  @media (max-width: ${props => props.theme.breakpoints.s}), (max-device-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
`

const Container = ({ children, type, className }) => (
  <Wrapper className={className} type={type}>
    {children}
  </Wrapper>
)

export default Container

Container.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['base', 'text']),
  className: PropTypes.string,
}

Container.defaultProps = {
  type: 'base',
  className: null,
}
