// webpack.config.js del User
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'user',
      exposes: {
        './UserProfile': './src/components/UserProfile',  // Exponer el componente UserProfile
      },
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 3001,  // Puerto donde la aplicación de usuario se ejecuta
  },
  mode: 'development',
};
