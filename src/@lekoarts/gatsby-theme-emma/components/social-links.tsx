import * as React from "react"
import { IconContext } from "react-icons";

import {TiSocialTwitterCircular, TiSocialLinkedinCircular} from 'react-icons/ti'

const SocialLinks = () => (
  <>
    {/* TWITTER */}
    <a href="https://twitter.com/leilamdesigns" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
      <IconContext.Provider value={{ size: "1.3em" }}>
          <TiSocialTwitterCircular />
      </IconContext.Provider>
    </a>
    {/* LINKEDIN */}
    <a href="https://www.linkedin.com/in/leilakmeyer/" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
      <IconContext.Provider value={{ size: "1.3em" }}>
          <TiSocialLinkedinCircular />
      </IconContext.Provider>
    </a>
  </>
)

export default SocialLinks
