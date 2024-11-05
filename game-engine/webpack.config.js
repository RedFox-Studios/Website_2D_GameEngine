const path = require('path');

module.exports = {
  entry: './src/GameEngine.js',
  output: {
    filename: 'game-engine.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'GameEngine',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};