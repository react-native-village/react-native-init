/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const {getDefaultConfig} = require('metro-config');
const blacklist = require('metro-config/src/defaults/exclusionList');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: true,
          inlineRequires: true,
        },
      }),
      minifierPath: 'metro-minify-terser',
      // plugins: ['@babel/plugin-proposal-numeric-separator'],
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      blacklistRE: blacklist([
        /ios\/build\/SourcePackages\/checkouts\/grpc-ios\/native_src\/.*/,
      ]),
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg', 'js', 'json', 'ts', 'tsx'],
      resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
    },
  };
})();
