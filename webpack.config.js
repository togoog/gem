const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const hello = 'hello-world';

module.exports = {
  entry: `./src/examples/${process.env.EXAMPLE || hello}/index`,
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'temp'),
  },
  plugins: [
    new HtmlWebpackPlugin(),
    {
      apply(compiler) {
        compiler.hooks.done.tapAsync('MyCustomPlugin', function(_compiler, callback) {
          if (!process.env.EXAMPLE) {
            setTimeout(() => {
              console.log('\n使用 `EXAMPLE=[example-name] npm run example` 指定用例');
            });
          }
          callback();
        });
      },
    },
  ],
  devServer: {
    contentBase: './temp',
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
