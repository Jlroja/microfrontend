const path = require('path');

module.exports = {
  mode: 'development',  // Usar 'development' o 'production'
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Asegúrate de procesar los archivos .js y .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Usar Babel para transpilación
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Asegura que Webpack resuelva archivos .jsx
  },
  devServer: {
    static: './public',  // Usar 'static' en lugar de 'contentBase'
    port: 8080,
  },
};
