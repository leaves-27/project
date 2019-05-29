var List = {
  data : {},
  methods : {}
}

var Index = {
  init:function(){
    this.list = null;
    Index.request(window.urlPrefix+"api/list.json",Index.render);
  },
  request:function(url,callback){
    $.ajax({
      url : url,
      dataType : "json",
      success : function(result){
        if(result.code==0) {
          callback(result.data)
        }else{
          Index.errMessage(result)
        }
      },
      error : function(xhr){

      }
    })
  },
  errMessage:function(){

  },
  render:function(data){
    var option = null;
    List.data.content = data;

    option = {
      el : "#list-el",
      data : List.data,
      template : "#list",
      methods : List.methods
    }
    this.list = new Vue(option);
    $('[data-toggle="tooltip"]').tooltip()
  }
}

Index.init();