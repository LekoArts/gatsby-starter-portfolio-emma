/** @jsx jsx */
import { Box, Link, Flex, jsx, useColorMode } from "theme-ui"
import gatsbylogo from '../../../images/gatsbyjs-icon.svg'

const Footer = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`

  return (
    <Box as="footer" variant="layout.footer">
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >

          made with <img
          sx={{
            color: 'primary',
            fontFamily: 'heading',
            height: '1.5em',
            verticalAlign: 'top',
            padding: '0 3px 0 3px'
          }}
          src={gatsbylogo} alt="gatsby logo" /> Gatsby

      </Flex>
    </Box>
  )
}

export default Footer
