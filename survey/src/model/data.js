define(function(){
  var data = [{
      "question": "您觉得当前我们APP的使用满意度如何？",
      "answers": [{
              "id": "1A",
              "text": "非常不满意",
              "isSelected":false
          },{
              "id": "1B",
              "text": "不太满意",
              "isSelected":false
          },{
              "id": "1C",
              "text": "一般",
              "isSelected":false
          },{
              "id": "1D",
              "text": "比较满意",
              "isSelected":false
          },{
              "id": "1E",
              "text": "非常满意",
              "isSelected":false
          }
      ]},{
          "question": "以下APP的功能模块中，您觉得体验最不满意的是哪几个?（最多2个）",
          "answers": [{
              "id": "2A",
              "text": "精品推荐 <br />（首页）",
              "isSelected":false,
              "disabled":false
          },{
              "id": "2B",
              "text": "理财产品 <br /> (产品列表页)",
              "isSelected":false,
              "disabled":false
          },{
              "id": "2C",
              "text": "产品的购买",
              "isSelected":false,
              "disabled":false
          },{
              "id": "2D",
              "text": "资金的赎回",
              "isSelected":false,
              "disabled":false
          },{
              "id": "2E",
              "text": "我的资产",
              "isSelected":false,
              "disabled":false
          },{
              "id": "2F",
              "text": "我的铜板",
              "isSelected":false,
              "disabled":false
          },{
              "id": "2G",
              "text": "无",
              "isSelected":false,
              "disabled":false
          }]
      },{
          "question": "您对我们的产品有什么意见或建议？（可不填）",
          "advice": "",
          "contact":""
      }
  ]

  return {
    data : data
  }
})
