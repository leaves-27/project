define(["jquery"],function($){
  //生成触点滑块
  //随机生成带文字的背景图片
  //随机从中取出一块

  //后端随机生成轨道轨迹，然后根据这个轨道轨迹生成一张图片返回给前端
  //前端将生成的轨道轨迹提交给后台，后台使用这两个轨迹进行比较

  //所需元素
  //wh、ht

  /*
   *随机生成五个点A、B、C、D、E
   *A、B
   *B[Ax,Cx]
   *C[Bx,Dx]
   *D[Cx,Ex]
   */

   /*一、生成图片
    *二、生成轨道
    *三、将轨道嵌入图片
    *四、生成滑块
    *五、生成一个完整的图片返回给前端
    
    *六、使滑块可以拖动
    *七、拖动滑块用其位置生成一个字符串提交后台
    */

    /*
     *canvas事件机制实现:
     * http://www.xyhtml5.com/html5-canvas-event-handler.html
     * http://www.cnblogs.com/xingzhi/archive/2012/12/04/2801311.html
     * Zrender库
     * KineticJS
     * 
     */
  
  var Event = function(){

  }

  var Stage = function(){

  }
  

  var Canvas = function(id,width,height,backgroundColor){
    this.id = id || "myCanvas";
    this.width = width || "350";
    this.height = height || "200";
    this.backgroundColor = backgroundColor || "#f2f2f2";

    var callBack = function(e){
      var pos = getEventPosition(e);
      
      if(this.isPointInPath(pos.x, pos.y)){
        //点击了矩形
      }
    }

    this.addEventListener('click',callBack,false)
  };

  Canvas.prototype.draw = function(container){
    var canvasTag = document.createElement("canvas");

    canvasTag.id=this.id;
    canvasTag.width = this.width;
    canvasTag.height = this.height;
    canvasTag.style.backgroundColor = this.backgroundColor;

    var container = document.getElementsByClassName(container);
    container[0].appendChild(canvasTag);
  }
  Canvas.prototype.getSize = function(){
    return {
      width:this.width,
      height:this.height
    }
  }

  var Picture = function(){
    
  }

  Picture.prototype.draw = function(ctx){
    ctx.drawImage(url,10,10);
  }

  var PathWay = function(x,y,width,height){
    this.x = x;
    this.y = y;
    this.color = "rgba(0,0,0,0.5)";
    this.points = null;
    this.lineWidth = 20;

    var createPoints = function(wh,ht){
      var points = [],
        pointNum = 4;


      var pointA = {};
      pointA.x = Math.random()*wh;
      pointA.y = Math.random()*ht;
      

      var pointB = {};
      pointB.x = Math.random()*(pointA.x + Math.abs(pointA.x - x));
      pointB.y = Math.random();

      points.push(pointB);
      points.push(pointA);

      return points;
    };


    this.points = createPoints(width,height);
  }

  PathWay.prototype.draw=function(ctx){
    ctx.beginPath();  
    ctx.moveTo(this.x,this.y);
    ctx.quadraticCurveTo(this.points[0].x,this.points[0].y,this.points[1].x,this.points[1].y);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.lineCap="round";
    ctx.stroke();
  }

  var Slider = function(x,y,radius,color){
    this.x = x || 70;
    this.y = y || 18;
    this.color = color || "#7ac23c";
    this.radius = radius ||10;
  }

  Slider.prototype.draw = function(cxt){
    cxt.fillStyle=this.color;
    cxt.beginPath();
    cxt.arc(this.x,this.y,this.radius,0,Math.PI*2,true);//横坐标、纵坐标、圆心、开始角度、结束角度、正向还是逆向
    cxt.closePath();
    cxt.fill();
  }

  Slider.prototype.drag = function(){

  }

  var Main = function(){
    var canvas = new Canvas();
    canvas.draw("container");

    var myCanvas = document.getElementById("myCanvas");
    var cxt = myCanvas.getContext("2d");

    var slider = new Slider();
    slider.draw(cxt);

    var canvasSize = canvas.getSize();

    var pathWay = new PathWay(70,18,canvasSize.width,canvasSize.height);
    pathWay.draw(cxt);
  }

  return Main;
})