define(["jquery","async"],function($,Async){
  var Example  = function(){

  }

  Example.prototype.init = function(){
    Async.series([function(cb){
      $.ajax({
        url:"./lib/jquery.js",
        type:"get"
      }).done(function(result){
        console.log("我请求了jquery");
        cb();
      }).fail(function(error){

      });
    },function(cb){
      $.ajax({
        url:"./lib/mock.js",
        type:"get"
      }).done(function(result){
        console.log("我请求了mockjs");
        cb();
      }).fail(function(error){

      });
    },function(cb){
      $.ajax({
        url:"./lib/require.js",
        type:"get"
      }).done(function(result){
        console.log("我请求了requirejs");
        cb();
      }).fail(function(error){
        
      });
    }]);
  };

  return Example;
})