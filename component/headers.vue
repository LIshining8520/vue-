<template>
 <div class="header">
    <img src="/img/logo.png" class="logo">
  <ul>
    <li>首页</li>
    <li @mouseenter="changeDown" @mouseleave="changeUp">产品
      <products v-if="hide"></products>
    </li>
    <li @mouseenter="changeDownOne" @mouseleave="changeUpOne">媒体
       <ul v-if="show" class="one">
        <li ><a href="news.html">新闻</a></li>
        <li><a href="#">视频</a></li>
      </ul>
    </li>
    <li @mouseenter="changeDownTwo" @mouseleave="changeUpTwo">关于
      <ul class="one" v-if="showDown">
        <li><a href="about.html">品牌故事</a></li>
        <li><a href="#">团队介绍</a></li>
        <li>商务合作</li>
        <li>工作机会</li>
      </ul>
    </li>
    <li @mouseenter="changeDownThree" @mouseleave="changeUpThree">支持
      <ul class="one" v-if="showUp">
        <li>常见问题</li>
        <li>售后服务</li>
        <li>版权声明</li>
        <li>隐私政策</li>
      </ul>
    </li>
  </ul>
  <img src="/img/shopping.png" class="shopping">
  
 </div>
</template>
<script>
import vue from 'vue'
import products from './products.vue'

export default {
  name:"headers",
  data(){
    return{
      show:false,
      showDown:false,
      showUp:false,
      hide:false
    }
  },
  methods:{
    changeDownOne:function(){
        this.show=true
      
    },
    changeUpOne:function(){
      this.show=false
     console.log(111);
    },
    changeDownTwo:function(){
      this.showDown=true
    },
    changeUpTwo:function(){
      this.showDown=false
    },
    changeDownThree:function(){
      this.showUp=true
    },
    changeUpThree:function(){
      this.showUp=false
    },
    changeDown:function(){
      this.hide=true
    },
    changeUp:function(){
      this.hide=false
    }
  },
  mounted:{

  },
  components:{products}
  
}
</script>
<style scoped>
.header{
  height: 72px;
  width: 100%;
  background: #000;
  color: #fff;
}
ul,ol,li{
  list-style-type: none;
  height: 72px;
  line-height: 72px;
  padding-left: 20px;
}
a{
  color: #fff;
  text-decoration: none;
  
}
.header>.logo{
  float: left;
  width: 83px;
  height: 35px;
  margin-top: 15px;
  margin-left: 10%;
  margin-right: 15%;
}
.header>ul{
  width: auto;
  float: left;
  margin-right: 10%;
}
.header>ul>li{
  height: 72px;
  line-height: 72px;
  float: left;
  width: 100px;
  padding-left: 20px;
  cursor: pointer;
  font-family: 微软雅黑;
  font-size: 16px;
  color: #ccc;
}
.one{
  border: 1px solid #000;
  background: #000;
  color: #fff;
  height: auto;
  width: 150px;
  margin: 0;
  padding: 0;
  z-index: 9999 !important;
  position: absolute;
  margin-left: -20px;
  
}
.one>li>a{
  color: #ccc;
  font-size: 16px;
}
.one>li:hover{
  background: #444;
}
.header>.shopping{
  width: 20px;
  height: 20px;
  margin-top: 30px;
}
.product{
  z-index: 999;
  position: absolute;
  left: 0;
}
</style>