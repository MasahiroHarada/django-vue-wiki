module.exports = {
  entry: './src/index.js',
  html: {
    inject: false,
    title: 'Wiki',
    filename: '../../templates/index.html',
    template: './index.ejs',
    appMountId: 'app'
  }
};
