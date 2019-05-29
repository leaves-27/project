define(["jquery","./index-tpl","css!./index-styl"],function($,tpl,css){
  //这里面牵扯到这个概念：
  //relatedTarget:
  //toElement:
  //fromElement:
  //IE的事件模型:
  //compareDocumentPosition():这个方法是DOM Level 3 specification的一部分,允许你确定2个DOM Node之间的相互位置，返回一个二进制数
  //contains():用来确定DOM Node是否包含在另一个DOM Element中。注：如果DOMNode和DOMElement相一致，contains()将返回 true 

  var A  = function(){

  }

  A.prototype.init = function(){
    var _self = this;

    var $container = $(".container");
    
    var itemDetailCls = ".itemDetail";

    $container.append(tpl());

    var $hover = $(".itemGeneral a");
    $hover.on("mouseover",{
      "_self":_self,
      "itemDetailCls":itemDetailCls
    },_self.mouseoverHanlder);

    $(itemDetailCls).on("mouseout",{_self:_self},_self.mouseoutHanlder);
  }

  A.prototype.oEvent=function(e){
      var oEvent = document.all?window.event : e;//用来判断是不是IE

      if(document.all){
        if(oEvent.type == "mouseout"){
          oEvent.relatedTarget = oEvent.toElement;
        }else if(oEvent.type == "mouseover"){
          oEvent.relatedTarget = oEvent.fromElement;
        }       
      }

      return oEvent;
  };

  A.prototype.contains=function(a,b){
    //a.compareDocumentPosition(b) & 16为true则表示节点a包含节点b
    //a.contains(b)为true，则表示节点b包含节点a

    //http://www.cnblogs.com/pigtail/archive/2012/06/07/2540246.html
    console.log("a:"+a);
    console.log("b:"+b);
    console.log("contains:"+a.contains(b));
    console.log("compareDocumentPosition:"+a.compareDocumentPosition(b));
    return a.contains ? (a != b && a.contains(b)) : (!!(a.compareDocumentPosition(b) & 16))
  };

  A.prototype.mouseoverHanlder = function(e){
    var _self = e.data._self,
        itemDetailCls = e.data.itemDetailCls;

    $(itemDetailCls).css("display","none");
    $(itemDetailCls,$(this).parent().parent()).css("display","block")
  };

  A.prototype.mouseoutHanlder = function(e){
    var _self = e.data._self;
    var o = _self.oEvent(e);

    if(!_self.contains(this,o.relatedTarget)){
      this.style.display = "none";
    }
  };

  return A;
})