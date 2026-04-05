// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
// };
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@store': './src/store',
          '@theme': './src/theme',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@typings': './src/types',
        },
      },
    ],
  ],
};
