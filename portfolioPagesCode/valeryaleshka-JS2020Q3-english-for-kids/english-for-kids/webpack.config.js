const path = require('path');

module.exports = {
  mode: 'none',
  entry: {
    main: path.resolve(__dirname, './scripts/app.js'),
  },
  output: {
    path: path.resolve(__dirname, './src'),
    filename: '[name].bundle.js',
  },
};
