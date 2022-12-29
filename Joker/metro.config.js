/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const blacklist = require('metro-config/src/defaults/exclusionList');
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
      minifierPath: 'metro-minify-terser',
      // plugins: ['@babel/plugin-proposal-numeric-separator'],
    }),
  },
  resolver: {
    blacklistRE: blacklist([
      /ios\/build\/SourcePackages\/checkouts\/grpc-ios\/native_src\/.*/,
    ]),
    resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
  },
};
