var $ = require("jquery");
require("jquery-validation");
require("./main.styl");

var Form = {
  init:function(){
    var _self = this;
    var $login = $("#login");
    var $changeImg = $("#valid-code-picture-a");
    $login.validate({
      rules:{
        username: {
          required: true,
          minlength: 2
        },
        password: {
          required: true,
          minlength: 6
        },
        validatecode: {
          required: true,
          minlength: 4
        }
      },
      messages: {
        username: {
          required: "请输入用户名",
          minlength: "用户名必需至少包含两个字符"
        },
        password: {
          required: "请输入密码",
          minlength: "密码长度不能小于 6位字符"
        },
        validatecode: {
          required: "请输入验证码",
          minlength: "验证码长度不能小于4位数字"
        }
      },
      submitHandler: function(form){      
        _self.ajaxSubmitForm($login.serializeArray());
      }
    });
    $changeImg.on("click",{imgSrc:$("#valid-code-picture")},_self.changeImg);
  },
  changeImg:function(event){
    var _self = Form;    
    var imgSrc = event.data.imgSrc;    
    var src = imgSrc.attr("src");    
    imgSrc.attr("src",_self.chgUrl(src));  
  },
  chgUrl:function(url){    
    var timestamp = (new Date()).valueOf();    
    url = url.substring(0,17);    
    if((url.indexOf("&")>=0)){    
        url = url + "×tamp=" + timestamp;    
    }else{    
        url = url + "?timestamp=" + timestamp;    
    }    
    return url;    
  },
  ajaxSubmitForm:function(para) {
    var $error = $("#error-tip")
    var url = "/jajax/saveForm.do";
    $.ajax({
      type: "post",
      cache: false,
      dataType: "json",
      url: url,
      data: para,
      success: function(data, textStatus){
        if(data.status){
          $error.text("登录成功");
          setTimeout(function(){
            location.href=location.href;
          },1000);
        }else{
          $error.text("登录错误，请联系网站管理员或客服。联系电话XXXX.");
        }
      },
      error:function(xhr,errorMsg){
        $error.text("登录失败，请稍后重新登录");
      },
      complete: function(XMLHttpRequest, textStatus){
          //do something in the end...
      }
    });
  }
}

$(function(){
  Form.init();
})