// In webpack.config.js
var os = require('os');
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var os = require('os')

var getFirstIpBeggining10 = function () {
  var ifaces = os.networkInterfaces();
  var result;
  Object.keys(ifaces).forEach((ifaceName) => {
    var iface = ifaces[ifaceName];
    iface.forEach((i) => {
      if (i.address.startsWith('10.')) {
        result = i.address;
        return
      }
    });
    if (result) return
  });
  return result
}

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'eval',
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/, loaders: ['babel']
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?name=[path][name].[ext]'
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
        include: path.join(__dirname, 'app/styles')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      },
      {
        test: /\.([ot]tf|eot|woff2?|svg)$/,
        loader: 'file??name=fonts/[name].[ext]'
      },
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.ProvidePlugin({
      "React": "react"
    }),
    new webpack.ProvidePlugin({
      "$": "jquery"
    }),
    new webpack.ProvidePlugin({
      "ReactDOM": "react-dom"
    }),
    new webpack.ProvidePlugin({
      "axios": "axios"
    }),
    new webpack.ProvidePlugin({
      "autobind": "autobind-decorator"
    }),
    new webpack.ProvidePlugin({
      "classNames": "classnames"
    }),
    new ExtractTextPlugin("[name].css"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': process.env.NODE_ENV ? JSON.stringify(process.env.NODE_ENV) : JSON.stringify('DEBUG')
      },
      'servUrl': JSON.stringify(process.env.NODE_ENV === 'production' 
        ? 'http://geonode.imaflora.org:8000/' 
        : 'http://geonode:8000/')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),
  ]
}

if (process.env.NODE_ENV !== 'production') {
  var a = ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server'];
  if (process.env.NODE_ENV === 'network') {
    a = ['webpack-dev-server/client?http://' + os.hostname() + ':8080', 'webpack/hot/only-dev-server'];
  }
  module.exports.entry = a.concat(module.exports.entry);
}
