/*
 * @Author: 朽木白
 * @Date: 2022-08-01 11:13:10
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-01 14:42:57
 * @Description:
 */
const path = require('path');

console.log('__dirname', __dirname);

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
    library: {
      // name: '_',
      type: 'umd',
    },
  },
};
