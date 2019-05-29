function checkPhone(phone){
  if(!(/^1[34578]\d{9}$/.test(phone))){ 
    return false; 
  }else{
    return true;
  }
}

function initDocumentHeight(){
  $(".login").height(winHt +'px');
  $(window).height(winHt +'px');
  $(document).height(winHt +'px');
}

function message(msg){
  $("#error-message").text(msg);
}

function hanlder(e){
  var name = $("input[name='name']").val();
  var phone = $("input[name='phone']").val();

  if(!name){
    e.preventDefault();
    message("请输入姓名");
    return;
  }

  if(!phone){
    e.preventDefault();
    message("请输入手机号");
    return;
  }

  if(!checkPhone(phone)){
    e.preventDefault();
    message("手机号填写有误，请核实");
    return;
  }
}

var winHt = $(window).height();

function orient() {
  if(window.orientation == 0 || window.orientation == 180) {
    $("body").attr("class", "portrait");
    orientation = 'portrait';
    return false;
  }else if (window.orientation == 90 || window.orientation == -90) {
    $("body").attr("class", "landscape");
    orientation = 'landscape';
    return false;
  }
}   

$(function(){
  $(window).on("resize",initDocumentHeight);
  $("form").on("submit",hanlder);

  orient();
  $(window).bind( 'orientationchange',function(e){
    orient();
  });
});