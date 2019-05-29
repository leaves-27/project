<style>
  body{
    font-family: "PingFang SC","微软雅黑",Arial,"Hiragino Sans GB","Helvetica Neue",sans-serif;
    background-color:#e8e8e8; 
  }
  
  .h1,.h2{font-size:16px;}

  .h1{text-align:center;height: 53px;line-height: 53px;}
  .h2{height: 50px;line-height: 50px;}
  .h3{height:21px;line-height:21px;padding-top:18px;padding-bottom: 14px;}

  .item{font-size:14px;}
  .cont{color:rgba(102,102,102,100);}

  .h2,.tourist,.rest{background-color:#fff;padding-right:15px;}
  .h2{padding-left:15px;font-size:16px;}

  .h2,.h3{color:#333333;}

  .cont{padding-bottom:20px;line-height: 21px;}
  .cont img{margin-top:10px;margin-bottom:10px;display: block;width: 100%}
  .boundary{width:1px;background-color: transparent;margin-left:30px;margin-right:30px;}
  .boundary-border{width:1px;background-color: #ccc;margin-left:30px;margin-right:30px;}
  .boundary-ht{height: 10px;}
  .boundary-14{height: 14px;}
  .boundary-18{height: 17px;}
  .boundary-21{height: 21px;}
  .boundary-100{height:100%;}
  .float-left{float:left;}
  .clearfix{overflow: hidden;}

  .tourist,.rest{display: -webkit-flex;display: flex;}
  .menu{/*width:30px;*/}
  
  .double-circle{margin-left: 19px;}
  .double-circle-boundary{}
  .circle-wrap{width: 20px;height: 20px;border-radius: 10px;border-width:1px;border-style:solid;}
  .circle{width: 14px;height: 14px;border-radius:7px;margin:3px;}

  .border-color-orange{border-color:#E38E02;}
  .background-color-orange{background-color:#E38E02;}

  .border-color-green{border-color:#66AF17;}
  .background-color-green{background-color:#66AF17;}
</style>
<template>
  <div class="container">
    <h1 class="h1">行程共{{ list.length }}天，{{ list.length }}个景点</h1>
    <div class="item" v-for="item,i in list">
      <h2 class="h2">{{ item.date }}</h2>
      <div class="boundary-border boundary-ht"></div>
      <div class="tourist clearfix">
        <div class="menu">
          <div class="double-circle-boundary">
            <div class="boundary-border boundary-18"></div>
            <div class="double-circle">
              <div class="circle-wrap border-color-green">
                <div class="circle background-color-green"></div>
              </div>
            </div>
            <div class="boundary-border boundary-14"></div>
          </div>
          <div class="boundary-border boundary-100"></div>
        </div>
        <div class="main">
          <h3 class="h3">【游】{{ item.tourist.title }} </h3>
          <div class="cont" v-html="item.tourist.content"></div>
        </div>
      </div>
      <div class="boundary boundary-ht"></div>
      <div class="rest clearfix">
        <div class="menu">
          <div class="double-circle-boundary">
            <div class="boundary-border boundary-18"></div>
            <div class="double-circle">
              <div class="circle-wrap border-color-orange">
                <div class="circle background-color-orange"></div>
              </div>
            </div>
            <div class="boundary-border boundary-14"></div>
          </div>
          <div class="boundary-border boundary-100"></div>
        </div>
        <div class="main">
          <h3 class="h3">【住】{{ item.rest.title }}</h3>
          <div class="cont" v-html="item.rest.content"></div>
        </div>
      </div>
      <div v-if="i==(list.length-1)" class="boundary boundary-ht"></div>
      <div v-else class="boundary-border boundary-ht"></div>
    </div>
  </div>
</template>
<script>
  import reset from '../common/reset.css'
  import  Journey from '../api/journey'
  // import loading from '../component/loading.vue'

  const Home = {
    data(){
      return {
        urlPrefix : "http://115.239.255.114:8888/",
        customRouteDaysVOList : [{
          date:"第一天",
          tourist:{
            title:"大木山景区",
            content:"是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是<img src='../../imgs/11.png' />周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山"
          },
          rest:{
            title:"万达嘉华酒店",
            content:"万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决"
          }
        },{
          date:"第二天",
          tourist:{
            title:"大木山景区",
            content:"是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山是周三神山"
          },
          rest:{
            title:"万达嘉华酒店",
            content:"万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决万达嘉华酒店，一套房解决"
          }
        }]
      }
    },
    mounted(){
      let _self = this;
      this.getData();
    },
    methods:{
      getData(){
        const _self = this;
        let url = _self.urlPrefix + "mobile/api/customRoute/query";
        let result = Utils.get(location.href);

        Journey.get(result.favour,result.playTime,(data)=>{

        });
      }
    }
  }

  export default Home
</script>