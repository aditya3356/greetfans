const env = require('dotenv').config({path: './.env'});

module.exports = {
  target: 'server',
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },

  resolve: {
    // Use our versions of Node modules.
    alias: {
      'fs': 'browserfs/dist/shims/fs.js',
      'buffer': 'browserfs/dist/shims/buffer.js',
      'path': 'browserfs/dist/shims/path.js',
      'processGlobal': 'browserfs/dist/shims/process.js',
      'bufferGlobal': 'browserfs/dist/shims/bufferGlobal.js',
      'bfsGlobal': require.resolve('browserfs')
    }
  },
  // plugins: [
  //   // Expose BrowserFS, process, and Buffer globals.
  //   // NOTE: If you intend to use BrowserFS in a script tag, you do not need
  //   // to expose a BrowserFS global.
  //   new webpack.ProvidePlugin({ BrowserFS: 'bfsGlobal', process: 'processGlobal', Buffer: 'bufferGlobal' })
  // ],
  // DISABLE Webpack's built-in process and Buffer polyfills!
  node: {
    process: false,
    Buffer: false
  },



  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    stripe: {
      publicKey: process.env.STRIPE_PUBLIC_KEY,
    },
    isTestMode:
      process.env.STRIPE_PUBLIC_KEY &&
      process.env.STRIPE_PUBLIC_KEY.indexOf('pk') > -1,
  },
};
