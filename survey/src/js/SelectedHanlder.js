define(function(){
  var SelectedHanlder = {
      setRadio : function(item,$scope){
          var answers = item.answers;

          for(var k in answers){
            answers[k].isSelectedHanlder = function(value){
              for(var l in answers){
                  answers[l].isSelected = false;
              }
              this.isSelected = true;
            }
          }
          $scope.template = item;
      },
      setCheckbox : function(item,$scope){
        var _self = this;
        var answers = item.answers;
        var selectedNum = 0;

        for(var i in answers){
          if(answers[i].isSelected){
            selectedNum ++;
          }
        };

        for(var k in answers){
          answers[k].isSelectedHanlder = function(value){
            if(selectedNum > 0){
              for(var l in answers){
                if(answers[l].text == "无"){

                  if(answers[l].isSelected){
                    if(this.text == "无"){
                      this.isSelected = false;
                      selectedNum --;
                    }
                    _self.disabledOther(answers);
                    return;
                  }else{
                    if(this.text == "无"){
                      _self.disabledOther(answers);
                      return ;
                    }
                  }
                }
              }
            }

            if(this.isSelected){

              var regex = /textWrap.+<\/span>$/;

              var text = this.text.match(regex);

              if(text){
                this.text = text[0].replace("textWrap'>","").replace(/<\/span>/g,"");
              }

              this.isSelected = false;
              selectedNum --;
            }else if(selectedNum < 2){
              this.text = "<span class='overflow imgFrame'>" + "<img width='19' height='19' src='../../imgs/icon_01.png' />" + "<span class='textWrap'>" + this.text + "</span>" + "</span>";
              this.isSelected = true;
              selectedNum ++;
            };

            _self.selectedNum = selectedNum;
            _self.disabledOther(answers);
          }
        }
        $scope.template = item;
      },
      disabledOther : function(answers){
        var _self = this;
        var isDisabled = false,
            isSelected = false,
            index = 0;

        for(var i in answers){
          if(answers[i].text == "无"){
            index = i;
            isSelected = answers[index].isSelected;
          }
        };

        if(isSelected){
          for(var k = 0;k < answers.length ; k ++){
            if(k != index){
              answers[k].disabled = true;
            }
          }
        }else if(_self.selectedNum >= 2){
          for(var m = 0;m < answers.length ; m ++){
            if(!answers[m].isSelected){
              answers[m].disabled = true;
            }
          }
        }else{
          for(var n = 0;n < answers.length ; n ++){
            answers[n].disabled = false;
          }
        }
      }
  }

  return SelectedHanlder;
});
