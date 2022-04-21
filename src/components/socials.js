/** @jsx jsx */
import React from "react";
import { jsx, Themed, useThemeUI } from "theme-ui";
// import { SocialIcon } from 'react-social-icons'
import useSiteMetadata from "../hooks/use-site-metadata";

const Socials = () => {
  const { social } = useSiteMetadata();
  const { theme } = useThemeUI();
  return social ? (
    <>
      <Themed.h3>Socials</Themed.h3>
      <Themed.ul sx={{ listStyle: "none", p: 0, m: 0 }}>
        {social.map(({ url }) => (
          <Themed.li
            key={url}
            sx={{
              display: "inline",
              mr: 0,
            }}
          >
            {/* <SocialIcon
              url={url}
              bgColor='transparent'
              fgColor={theme.colors.text}
            /> */}
          </Themed.li>
        ))}
      </Themed.ul>
    </>
  ) : null;
};

export default Socials;
