require.config({
  //配置angular的路径
  paths:{
    "jquery":"./lib/jquery",
    'async':'./lib/async',
    "css": "./lib/css",
    'mock':'./lib/mock',
    "app":"./app"
  },
  deps: ['app'],
  urlArgs:"bust="+(new Date()).getTime()
});