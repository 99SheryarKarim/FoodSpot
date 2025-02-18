const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Add polyfills for crypto
  config.resolve.alias['crypto'] = 'crypto-browserify';

  return config;
};
