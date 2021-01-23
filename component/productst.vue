<template>
  <div class="productst">
   <div class="con">
      <div class="list" @click="pro">
      <img src="/img/1545205287_222a3e965c1e790e415d0625ac4295b1.jpg" alt="">
      <h3>宠物饮水机滤芯</h3>
      <p>优质滤材 四重过滤</p>
    </div>
     <div class="list">
      <img src="/img/1545205287_222a3e965c1e790e415d0625ac4295b1.jpg" alt="">
      <h3>宠物饮水机滤芯</h3>
      <p>优质滤材 四重过滤</p>
    </div>
     <div class="list">
      <img src="/img/1545205287_222a3e965c1e790e415d0625ac4295b1.jpg" alt="">
      <h3>宠物饮水机滤芯</h3>
      <p>优质滤材 四重过滤</p>
    </div>
   </div>
  </div>
</template>
<script>
export default {
  name:"productst",
  methods:{
    pro(){
      location.href="product.html"
    }
  }
}

</script>
<style scoped>
.productst{
  width: 100%;
  height: auto;
}
.productst>.con{
  max-width: 1200px;
}
.productst>.con>.list{
  width: 28%;
  overflow: hidden;
  display: inline-block;
  margin-bottom: 50px;
  margin-left: 20px;
  cursor: pointer;
}
.productst>.con>.list>img{
  width: 77.78%;
  height: 77.78%;
}
.productst>.con>.list>h3{
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 400;
  padding: 0 55px;
  color: #000;
  font-family: 微软雅黑;
}
.productst>.con>.list>p{
  font-size: 18px;
  color: #666;
  padding: 0 55px;
}

</style>