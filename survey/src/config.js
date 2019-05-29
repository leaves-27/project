require.config({
  //配置angular的路径
  paths:{
    "angular":"lib/angular",
    "ngRoute":"lib/angular-route",
    "ngTouch":"lib/angular-touch",
    "ngSanitize":"lib/angular-sanitize",
    "app":"js/app",
    "compatible":"js/compatible",
    "page":"js/page",
    "selectedHanlder":"js/selectedHanlder",
    "data":"model/data"
  },
  // 这个配置是你在引入依赖的时候的包名
  shim:{
      "angular":{
        exports:"angular"
      },
      "ngRoute":{
        exports:"ngRoute"
      },
      "ngTouch":{
        exports:"ngTouch"
      },
      "ngSanitize":{
        exports:"ngSanitize"
      }
  },
  deps: ['app'],
  urlArgs:"bust="+(new Date()).getTime()
});

