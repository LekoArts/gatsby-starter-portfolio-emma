const React = require('react')

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <noscript key="noscript">
      Please activate JavaScript to use this site. If you have further problems please try to deactivate the service
      worker, too.
    </noscript>,
  ])
}
