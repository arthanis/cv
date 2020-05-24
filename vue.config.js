module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap(args => {
      args[0].title = 'Imre Tóth - Frontend developer';
      return args;
    });
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cv/'
    : '/',
};
