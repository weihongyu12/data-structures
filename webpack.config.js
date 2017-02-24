/**
 * webpack
 */
module.exports = {
  entry  : {
    bst          : './src/bst.js',
    dictionary   : './src/dictionary.js',
    graph        : './src/graph.js',
    'hash-table' : './src/hash-table.js',
    'linked-list': './src/linked-list.js',
    queue        : './src/queue.js',
    stack        : './src/stack.js',
  },
  output : {
    path    : './dist',
    filename: '[name].js'
  },
  module : {
    rules: [
      {
        test   : /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader : 'babel-loader'
      }
    ]
  },
  devtool: "source-map",
  target : "node"
};