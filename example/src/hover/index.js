define(["jquery","./index-tpl","css!./index-styl"],function($,tpl,css){
  var A  = function(){

  }
  A.prototype.init = function(){
    var $container = $(".container");

    $container.append(tpl({
      self:{
        "title":"我是填充jade的数据"
      }
    }));
  }

  
  return A;
})