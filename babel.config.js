module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@assets': './src/assets',
          '@resources': './src/resources',
          '@screens': './src/screens',
          '@routes': './src/routes',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
