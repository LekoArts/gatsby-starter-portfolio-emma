const chalk = require('chalk');
const pkg = require('../package.json');

// prettier-ignore
console.log(`
${chalk.green('Hey there! 👋')}
Thanks for giving the ${pkg.name} a try. 🎉
This project includes two config files in ${chalk.yellow('./config')}
  - SiteConfig.js
  - variables.scss
The values you set in ${chalk.yellow('SiteConfig.js')} will affect components, gatsby-config.js and other files.
The values you set in ${chalk.yellow('variables.scss')} will only affect the SCSS files. You can easily set a theme for your project there.
Happy with your setup? Great!
You can start the development server just like that:
${chalk.yellow('npm run dev')} to start a development environment at ${chalk.green('localhost:8000')} and open the browser
or
${chalk.yellow('npm run build')} to create a production ready static site in ${chalk.green('./public')}
For further information check the readme of the project
${pkg.repository.url}
`);
