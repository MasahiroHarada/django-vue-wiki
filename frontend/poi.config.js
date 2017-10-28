module.exports = {
  entry: './src/index.js',
  html: {
    inject: false,
    filename: '../../templates/index.html',
    template: './index.ejs',
    appMountId: 'app'
  }
};
