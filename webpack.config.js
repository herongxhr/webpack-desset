const path = require('path');
console.log('NODE_ENV', process.env.NODE_ENV);
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
}
// module.exports = (env, arg) => {
//   console.log('env:', env, 'arg:', arg)
//   return {
//     entry: './src/index.js',
//     output: {
//       path: path.resolve(__dirname, 'dist'),
//       filename: 'main.js'
//     },
//     mode: 'development',

//   }
// }
