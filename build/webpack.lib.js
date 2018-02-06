const path = require('path')
const yaml = require('js-yaml')
const resolve = dir => path.resolve(__dirname, '..', dir)

module.exports = {
  entry: resolve('src/index.js'),
  output: {
    filename: 'why-status.js',
    path: resolve('lib'),
    libraryTarget: 'umd',
    library: 'WhyStatus'
  },
  module: {
    rules: [
      {
        test: /\.yam?l/,
        loader: 'ware-loader',
        options: {
          middleware: source => yaml.safeLoad(source)
        }
      }
    ]
  }
}
