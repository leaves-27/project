define(["jquery","./index-tpl","css!./index-styl"],function($,tpl){
  var $body = $("body");
  $body.html(tpl({
    self:{
      "title":"我是xxx122132"
    }
  }))
})