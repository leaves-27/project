define(function(){
  var Cookie = function(){

  }

  Cookie.prototype.setCookie : function(name,value,path,domain){
    var Days = 3*365;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ";path=" + path + ";domain=" + domain + ";";
  };

  Cookie.prototype.getCookie : function(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

    if(arr=document.cookie.match(reg)){
      return unescape(arr[2]);
    }else{
      return null;
    }
  };

  Cookie.prototype.delCookie : function(name){
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);

      var cval=getCookie(name);
      if(cval!=null){
            document.cookie= name + "="+cval+";expires="+exp.toGMTString() + ";";
      }
  }
  return Cookie;
})
