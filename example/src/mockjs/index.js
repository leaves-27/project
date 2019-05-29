define(["jquery","mock"],function($,Mock){
  // 使用 Mock
  Mock.mock('http://res.test.com',{
    'title|1': '我是mock的测试数据'
  });
  
  var A  = function(){

  }
  A.prototype.init = function(){
    $.ajax({
      url:"http://res.test.com",
      dataType:"json"
    })
    .done(function(result){
      var $body = $("body");
      $body.append(result.title);
    })
    .fail(function(err){
      console.log(err);
    });
  }

  return A;
})