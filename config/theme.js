import { darken } from 'polished'

const brand = {
  primary: '#cf1993',
  secondary: '#7b8acc',
}

const colors = {
  grey: '#25252',
  black: '#000',
  white: '#fff',
  bg_color: '#f3f3f3',
  body_color: '#222',
  link_color: brand.primary,
  link_color_hover: `${darken(0.15, brand.primary)}`,
}

export const overlay = {
  red: '#f76262',
  blue: '#216583',
  teal: '#65c0ba',
  marine: '#35477d',
  lila: '#9951ff',
  wine: '#480032',
}

const theme = {
  brand,
  colors,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  container: {
    base: '100rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
}

export default theme
