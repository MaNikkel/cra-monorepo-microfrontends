const path = require('path')

const { getLoader, loaderByName } = require('@craco/craco')

const packages = []
packages.push(path.join(__dirname, "..", "app1"))
packages.push(path.join(__dirname, "..", "app2"))
packages.push(path.join(__dirname, "..", "components"))

module.exports = {
  webpack: {
    configure: (webpackConfig, args) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      )
      if (isFound) {
        const include = Array.isArray(match.loader.include) ? match.loader.include : [match.loader.include]
        match.loader.include = include.concat(packages)

        return webpackConfig
      }
    }
  }
}