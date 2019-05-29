require(["angular"],function(Angular){
    require(["data","compatible","page","selectedHanlder","ngRoute","ngTouch","ngSanitize"],function(Data,Compatible,Page,SelectedHanlder){
      var app = Angular.module("questionnaireModule",['ngRoute','ngTouch','ngSanitize']);

      app.config(function ($routeProvider) {
        $routeProvider.when('/survey/',{
            templateUrl: 'html/first.html',
            controller:'MainController'
        }).when('/survey/question02',{
            templateUrl: 'html/second.html',
            controller:'MainController'
        }).when('/survey/question03',{
            templateUrl: 'html/third.html',
            controller:'MainController'
        }).otherwise({
            redirectTo:'/survey/'
        });
      });
      
      app.controller("MainController",function($scope,$location,$http){
          Page.init(Data.data,$scope,$location,$http,SelectedHanlder);
      });

      Compatible.drawBorder();

      Angular.bootstrap(document,['questionnaireModule']);
    });
});


