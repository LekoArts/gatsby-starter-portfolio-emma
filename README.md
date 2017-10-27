![](https://i.imgur.com/M0nwIVi.png)

# Gatsby Starter Portfolio: Emma

A portfolio starter for [Gatsby](https://www.gatsbyjs.org/). The target audience are Designers and Photographers.

[Demo Website](https://embalmer-glues-43220.netlify.com/)

- Full-width Grid-Layout
- Large images
- Light Theme

## Why?

If you want to quickly bootstrap a design/photography portfolio or use it as a foundation for your personal site the *gatsby-starter-portfolio* are a perfect fit for you! The project's goal is to offer minimalistic and fast websites. [Tweet me](https://twitter.com/lekoarts_de) your website made with this starter!

## Features

- Configurable
    - Use the SiteConfig.js to easily change the most important information
    - Easily change the font
- Automatic colors for your projects (with the help of [vibrant.js](https://jariz.github.io/vibrant.js/))
- Projects in Markdown
- Google Analytics Support
- SEO
    - Sitemap
    - Schema.org JSONLD
    - OpenGraph Tags
    - Twitter Tags
- Offline Support
- WebApp Manifest Support
- Typography.js
- Responsive images
    - The right image size for every screen size
    - Traced SVG Loading (Lazy-Loading)
    - WebP Support

## Getting Started

Assuming that the [Gatsby CLI](https://www.gatsbyjs.org/docs/) is installed:

```
gatsby new Project-Name https://github.com/LeKoArts/gatsby-starter-portfolio-emma
npm run dev
```

## Configuration

You can configure your setup in ``config/SiteConfig``:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  siteTitle: 'Emma', // Navigation and Site Title
  siteTitleAlt: 'Emma - Gatsby Starter Portfolio', // Alternative Site title for SEO
  siteUrl: 'https://embalmer-glues-43220.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Minimalistic bright portfolio with full-width grid and large images',
  siteFBAppID: '123456789', // Facebook App ID
  userTwitter: 'emma', // Twitter Username
  ogSiteName: 'emma', // Facebook Site Name
  googleAnalyticsID: 'UA-12345689-1',
  copyright: 'Copyright © 2017. All rights reserved. Pictures by Unsplash.', // Copyright in the footer of the site
  
  // You can translate these three words into your language if you want. They'll be shown on the project page header
  client: 'Client',
  date: 'Date',
  service: 'Service',
  
  // Manifest and Progress color
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',
  
  // Settings for typography.js
  headerFontFamily: 'Merriweather',
  bodyFontFamily: 'Roboto',
  baseFontSize: '16px'
}
```

You can also configure the styling of the site by editing the SCSS variables in ``config/_variables.scss``:

```SCSS
// --------------
// Configuration
// --------------

// Configure your colors here

$brand-primary: #cf1993;
$brand-secondary: #7b8acc;
$grey: #252525;
$black: #000000;

// Configure your grid here
// You don't need to change it!

$content-width: 100vw;
$gutter: 0px;
$columns: 3;

$row-size: calc( (#{$content-width} - #{$gutter} * (#{$columns} - 1)) / #{$columns} );

// Configure the max-width of your containers here
// Try to keep it in sync with maxWidth of `gatsby-remark-images`

$container: 100rem;
$container-text: 55rem; // Longer texts should have a smaller max-width to improve readability

// Responsive Typography
// You can set your min and max font-size here
// More information: https://www.rucksackcss.org/docs/#responsive-type

html {
    font-size: responsive 12px 16px;
    font-range: 420px 1280px;
}
```

**Attention:** You also need to edit ``static/robots.txt`` to include your domain!

## Automatic Colors

By default the hover overlay of the grid image and the header on the project page automatically choose its color by using [react-palette](https://github.com/leonardokl/react-palette).
The plugin chooses the *vibrant* color of the image and applies it as the ``background-color`` for the hover overlay and header background. If you don't want that behavior you can delete the ``<Palette />`` component both from ``pages/index.jsx`` and ``templates/project.jsx``.

## Credits

- Inspired by [gatsby-advanced-starter](https://github.com/Vagr9K/gatsby-advanced-starter)

## About Me

Thanks for using my *gatsby-starter*. I hope you like it and create something awesome! To see some of my work you can visit my [website](https://www.lekoarts.de) or support me on [Patreon](https://www.patreon.com/lekoarts) to get some neat rewards (4K images, project files, tutorial insights).
