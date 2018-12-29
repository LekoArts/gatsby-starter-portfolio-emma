![](https://i.imgur.com/M0nwIVi.png)

# Gatsby Starter Portfolio: Emma

A portfolio starter for [Gatsby](https://www.gatsbyjs.org/). The target audience are designers and photographers.

[Demo Website](https://emma.lekoarts.de)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LekoArts/gatsby-starter-portfolio-emma) [![Edit gatsby-starter-portfolio-emma](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/LekoArts/gatsby-starter-portfolio-emma/tree/master/)

[![CircleCI](https://circleci.com/gh/LekoArts/gatsby-starter-portfolio-emma.svg?style=svg)](https://circleci.com/gh/LekoArts/gatsby-starter-portfolio-emma)

- Full-width grid-layout
- Large images
- Light theme

## Why?

If you want to quickly bootstrap a design/photography portfolio or use it as a foundation for your personal site the *gatsby-starter-portfolio* are a perfect fit for you! The project's goal is to offer minimalistic and fast websites. 

I hope you like my starters and create something awesome! To see some of my work you can visit my [website](https://www.lekoarts.de) or support me on [Patreon](https://www.patreon.com/lekoarts) to get some neat rewards (4K images, project files, tutorial insights). Every pledge on Patreon helps me creating more free starters!

Also check out the other *gatsby-starter-portfolio*:
- [gatsby-starter-portfolio-emilia](https://github.com/LeKoArts/gatsby-starter-portfolio-emilia)
- [gatsby-starter-portfolio-bella](https://github.com/LeKoArts/gatsby-starter-portfolio-bella)
- [gatsby-starter-portfolio-cara](https://github.com/LeKoArts/gatsby-starter-portfolio-cara)

Check out the [Gatsby Starter Portfolio Overview](https://gatsby-starter-portfolio.netlify.com/)!

## Features

- Configurable
    - Use the website.js to easily change the most important information
    - Easily change the font
- Choose a color for your projects highlights
- Create your subpages with MDX
- Uses styled-components for styling
- [react-spring](https://github.com/react-spring/react-spring) animations
- Projects in MDX ([gatsby-mdx](https://github.com/ChristopherBiscardi/gatsby-mdx))
- Cypress for End-to-End testing (+ CircleCI config)
- Google Analytics Support
- SEO
    - Sitemap
    - Schema.org JSONLD
    - OpenGraph Tags
    - Twitter Tags
- Offline Support
- WebApp Manifest Support
- Responsive images
    - The right image size for every screen size
    - Traced SVG loading (lazy-loading)
    - WebP support

## Getting Started

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:
- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)

To copy and install this starter run this command (with "project-name" being the name of your folder you wish to install it in):

```
gatsby new project-name https://github.com/LekoArts/gatsby-starter-portfolio-emma
cd project-name
npm run dev
```

### Adding a new project
- Create a new folder in `content/projects`
- Create a new markdown/mdx file, add the frontmatter (use the date format "YYYY-MM-DD")
- Add an image and reference it in your frontmatter as `cover`
- Write your content below the frontmatter

If you're still unsure have a look at the already existing examples.

### Adding a new page
- Create a new folder in `src/pages`
- Create a new mdx file with the name `index.mdx` in it

### Adding new features/plugins

You can add other features by having a look at the official [plugins page](https://www.gatsbyjs.org/docs/plugins/)

### Building your site

```
npm run build
```
Copy the content of the `public` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in `config/website.js`:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  siteTitle: 'Emma', // Navigation and Site Title
  siteTitleShort: 'Emma', // short_name for manifest
  siteUrl: 'https://emma.lekoarts.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Minimalistic bright portfolio with full-width grid and large images',
  author: 'LekoArts', // Author for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@emma', // Twitter Username
  ogSiteName: 'emma', // Facebook Site Name
  ogLanguage: 'en_US',
  googleAnalyticsID: 'UA-12345689-1',

  // Manifest and Progress color
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',
}
```

You can also configure the styling of the site by editing the theme variables in `config/theme.js`.

```JS
import { darken } from 'polished'

const brand = {
  primary: '#cf1993',
  secondary: '#7b8acc',
}

const colors = {
  grey: '#6b6b6b',
  black: '#000',
  white: '#fff',
  bg_color: '#f3f3f3',
  body_color: '#444',
  link_color: brand.primary,
  link_color_hover: `${darken(0.15, brand.primary)}`,
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
```

**Attention:** You also need to edit `static/robots.txt` to include your domain!
