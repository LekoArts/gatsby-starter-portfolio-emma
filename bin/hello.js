const chalk = require('chalk');
const pkg = require('../package.json');

// prettier-ignore
console.log(`
${chalk.green('Hey there! 👋')}
Thanks for giving the ${pkg.name} a try. 🎉
This project includes two config files in ${chalk.yellow('./config')}
  - website.js
  - theme.js
The values you set in ${chalk.yellow('website.js')} will affect components, gatsby-config.js, SEO and other files.
The values you set in ${chalk.yellow('theme.js')} will only affect the styling of your page.
Happy with your setup? Great!
You can start the development server just like that:
${chalk.yellow('npm run dev')} to start a development environment at ${chalk.green('localhost:8000')} and open the browser
or
${chalk.yellow('npm run build')} to create a production ready static site in ${chalk.green('./public')}
For further information check the readme of the project
${pkg.repository.url}
`);
