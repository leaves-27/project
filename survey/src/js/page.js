define(function(){
  var Submit = {
    init : function(data,url,$http,$location){
      var _self = this;

      _self.submit(_self.getSubmitParam(data),url,$http,$location);
    },
    getSubmitParam : function(data){
      var _self = this;

      var choose = [],
          advice = "",
          contact = "";

      for(var i = 0 ; i < data.length - 1 ; i++){
        var answers = data[i].answers;
        for(var j = 0;j < answers.length ; j++){
          if(answers[j].isSelected){
            choose.push(data[i].answers[j].id);
          }
        }
      };

      advice = data[2].advice;
      contact = data[2].contact;

      return {
        choose : choose,
        advice : advice,
        contact : contact
      }
    },
    submit : function(data,viewUrl,$http,$location){
      var _self = this;

      var postData = {
        amount : '1001',
        choose : data.choose.join(','),
        advice : data.advice,
        contact : data.contact
      };

      $http({
        url:"http://www.baidu.com",//将数据提交到的地址
        method: 'POST',
        data:JSON.stringify(postData),
        timeout:60000
      }).success(function(data,status){
        $location.path(url);
      }).error(function(data,status){
         alert("提交失败，请尝试重新提交");
      });
    }
  }


  var Page = {//Data.data,$scope,$location,$http
    init : function(originData,$scope,$location,$http,SelectedHanlder,$sce){
      var _self = this;

      switch($location.path()){
        case "/survey/":
          SelectedHanlder.setRadio(originData[0],$scope,$sce);
          break;
        case "/survey/question02":
          SelectedHanlder.setCheckbox(originData[1],$scope,$sce);;
          break;
        case "/survey/question03":
          $scope.template = originData[2];
          break;
        default:
          $scope.template="";
      }

      _self.data = originData;
      _self.$scope = $scope;
      _self.$location = $location;
      _self.$http = $http;

      $scope.goBack = _self.back;
      $scope.goNext = _self.next;
      $scope.inputVerifi = _self.verifi;
    },
    //进入下一页
    next : function(url){
      var _self = Page;

      if(url.match("04")){
        url="tbj://quit";

        Submit.init(_self.data,url,_self.$http,_self.$location);
        
      }else{
        if(!_self.verifi()){
          return ;
        };

        _self.$location.path("/survey/"+url);
      }
    },
    verifi : function($scope){
      var _self = Page;
      var answers = _self.$scope.template.answers;

      for(var k in answers){
          if(answers[k].isSelected){
            return true;
          }
      };

      return false;
    },
    //返回上一页
    back : function(){
      history.back();
    }
  }

  return Page;
});
