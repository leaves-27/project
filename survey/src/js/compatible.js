define(function(){
  //兼容样式
    var drawBorder = function(){//android 2.3.6对box-shadow的效果的模拟
      if(navigator.userAgent.toLowerCase().match(/android 2.3.6/)){
        var body = document.getElementsByTagName("body"),
            style = document.createElement("style"),
            textNode = document.createTextNode(".phoneBrand .active,.interfaceDesi .active,.exception .active,.tip  .active,.other  .active{border:1px solid #429de0;}");

        style.type="text/css";
        style.appendChild(textNode);

        body[0].appendChild(style);
      }
    };

    return {
      drawBorder :  drawBorder
    }
});
