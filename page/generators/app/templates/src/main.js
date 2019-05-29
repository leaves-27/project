require.config({
  //配置angular的路径
  paths:{
    "jquery":"./lib/jquery",
    "app":"./app",
    "css": "./lib/css"
  },
  deps: ['app'],
  urlArgs:"bust="+(new Date()).getTime()
});