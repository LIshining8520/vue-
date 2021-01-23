<template>
  <div class="products product">
     <div data-v-0ef3150e="" class="pro-col">
       <h4 data-v-0ef3150e="" class="pro-group-title">智能用品</h4>
       <div data-v-0ef3150e="" class="flex-row pro-block">
         <img data-v-0ef3150e="" src="/img/1545100156_bcd7cf4cfdeae8b8df43dea36a52b3c9.png" alt="" class="pro-thumb">
         <div data-v-0ef3150e=""  @click="pro">
           <h5 data-v-0ef3150e="" class="pro-title pro-h5">宠物饮水机</h5>
           <p data-v-0ef3150e="" class="pro-summary kaiti">呵护爱宠 健康饮水</p>
           </div>
           </div><br>
           <div data-v-0ef3150e="" class="flex-row pro-block">
             <img data-v-0ef3150e="" src="/img/1569566741_5c3d477f9293108d105cc14faba2d9b2.png" alt="" class="pro-thumb">
             <div data-v-0ef3150e="">
               <h5 data-v-0ef3150e="" class="pro-title pro-h5">智能宠物零食机</h5>
               <p data-v-0ef3150e="" class="pro-summary kaiti">智能“逗猫” 远程“遛狗”</p>
               </div>
               </div>
        </div>
        <div data-v-0ef3150e="" class="pro-col">
            <h4 data-v-0ef3150e="" class="pro-group-title">清洁</h4>
            
        </div>
            <div data-v-0ef3150e="" class="pro-col">
       <h4 data-v-0ef3150e="" class="pro-group-title">配件</h4>
       <div data-v-0ef3150e="" class="flex-row pro-block">
         <img data-v-0ef3150e="" src="/img/1545100779_5bfb0d5fa046511a64dc7cad9cff8d34.png" alt="" class="pro-thumb">
         <div data-v-0ef3150e="">
           <h5 data-v-0ef3150e="" class="pro-title pro-h5">宠物饮水机滤芯</h5>
           <p data-v-0ef3150e="" class="pro-summary kaiti">优质滤材 四重过滤</p>
           </div>
           </div><br>
        </div>
  </div>
</template>
<script>
export default {
  name:"products",
 data(){
   return{}
 } ,
   methods:{
    pro(){
      location.href="product.html"
    }
  },
 mounted(){

 }
}
</script>
<style scoped>
div{
  float: left;
}
.products{
  width: 80%;
  margin: 0 auto;
  padding: 30px 10% 30px;
  background: rgb(89, 89, 89);
}
.pro-col{
  width: 25%;
  margin-right: 32px;
  overflow: hidden;
  display: inline-block;
}
.pro-group-title{
  font-size: 18px;
    color: #fff;
    padding: 15px 0;
    margin-bottom: 24px;
    font-weight: 400;
    text-align: left;
    position: relative;
    line-height: 28px;
    font-family: 微软雅黑;
}
.pro-group-title::after{
  content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid #9b9ea4;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}
.pro-block[data-v-0ef3150e] {
    margin-bottom: 24px;
    cursor: pointer;
}
.pro-thumb[data-v-0ef3150e] {
    width: 52px;
    height: 52px;
    margin-right: 20px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    float: left;
}
.pro-title[data-v-0ef3150e] {
    color: #eaeaea;
    font-size: 16px;
    text-align: left;
    font-weight: 400;
    line-height: 22px;
    margin-top: 8px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.pro-summary[data-v-0ef3150e] {
    font-size: 12px;
    color: #caced4;
    line-height: 20px;
    text-align: left;
}
.kaiti {
    font-family: KaiTi;
}
</style>