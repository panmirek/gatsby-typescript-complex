/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const resolve = {
  alias: {
    '~components': path.resolve(__dirname, 'src/components'),
    '~pages': path.resolve(__dirname, 'src/pages'),
  },
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({ resolve })
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'develop' || stage === 'build-javascript') {
    config.plugin('ts-config-paths-plugin', () => new TsconfigPathsPlugin(), [
      { configFile: './tsconfig.json' },
    ])
  }

  config.merge({ resolve })

  return config
}
