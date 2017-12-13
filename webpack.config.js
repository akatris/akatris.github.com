const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './assets/js/main.js',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    })
  ]
}