module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-typescript', {onlyRemoveTypeImports: true}],
  ],
  plugins: [
    'react-obsidian/dist/transformers/babel-plugin-obsidian',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    '@babel/plugin-transform-class-properties',
    'babel-plugin-parameter-decorator',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          /**
           * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
           */
          '^~(.+)': './src/\\1',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
      },
    ],
  ],
};
