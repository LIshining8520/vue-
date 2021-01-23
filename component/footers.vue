<template>
  <div class="footer">
    <div class="news">
      <ul>
        <h4>新闻</h4>
        <li><a href="#">小米有品上架专为猫猫狗狗打造的“第一台饮水机”？！</a></li>
        <li><a href="#">选择猫猫狗狗宠物饮水机，让你的爱宠喝出健康，喝出乐趣</a></li>
        <li><a href="#">选择猫猫狗狗宠物饮水机，让你的爱宠喝出健康，喝出乐趣</a></li>
        <li><a href="#">解放铲屎官，猫猫狗狗宠物饮水机体验</a></li>
      </ul>
    </div>
    <div  class="pub">
      <ul>
        <h4>关于我们</h4>
        <li v-for="(v,index) in about" :key="index"><a href="#">{{v}}</a></li>
      </ul>
    </div>
    <div class="pub" >
      <ul>
        <h4>支持</h4>
        <li v-for="(v,index) in suppose" :key="index"><a href="#">{{v}}</a></li>
      </ul>
    </div>
    <div class="pub">
      <ul>
        <h4>关注我们</h4>
        <li v-for="(v,index) in ours" :key="index"><a href="#">{{v}}</a></li>
      </ul>
    </div>
    <div class="bottom">
      <p>Copyright © 2018 Kitten&Puppy Co.ltd All rights reserved. 京ICP备18045044号-1</p>
      <div  style="display: flex;">
        <div class="text-right footer-flow" style="padding-right: 20px; margin-top: -2px;">
          <h1  class="flow-font">400-999-2250</h1>
          <p  class="flow-title">周一到周日9:00-22:00</p>
          <p  class="flow-title">(仅收市话费)</p>
          <p  class="flow-title">商务邮箱：business@mmgg.fun</p>
          </div>
          <div  class="footer-code">
            <img  src="/img/public-account.37fd1f95.png" alt="" class="img-code">
            <p  class="code-title">扫码关注官方微信</p>
            </div>
            </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      about:["品牌故事","团队介绍","商务合作","工作机会"],
      suppose:["常见问题","售后服务","版权声明","隐私政策"],
      ours:["官方微信","新浪微博","一日猫"]
    }
  }
}
</script>
<style scoped>
ul,ol,li{
  list-style-type: none;
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  color: #caced4;
}
a:hover{
  color: #fff;
}
.footer{
  width: 88%;
  background: #404040;
  color: #fff;
  padding-left: 12%;
  padding-top: 100px;
}
div{
  float: left;
}
.news{
  width: 300px;
  overflow: hidden;
  margin-right:120px ;


}
.news>h4{
  height: 44px;
  line-height: 44px;
}
.news>ul>li{
  width: 300px;
  height: 44px;
  line-height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  margin-right: 120px;
  margin-bottom: 2px;
  border-bottom:1px dashed #656b73  ;
}
.pub{
  margin-right: 120px;
}
.pub>ul>h4{
  
  height: 44px;
  line-height: 44px;
  font-size: 16px;
}
.pub>ul>li{
  line-height: 44px;
  font-size: 14px;
}
.bottom{
  float: left;
  width: 100%;
  color: #caced4;
  margin: 50px 0 ;
}
.bottom>p{
 float: left;
 margin-right: 120px;
}
.footer-flow{
  position: relative;
}
.footer-flow>h1{
  font-size: 20px;
  color: #fff;
  line-height: 30px;
  text-align: right;
}
.footer-flow>p{
  text-align: right;
}
.footer-code{
  text-align: center;
}
.footer-code>img{
  width: 60px;
  height: 60px;
  
}
</style>