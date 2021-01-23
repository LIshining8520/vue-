<template>
  <div class="container">
    <div class="list">
      <img src="/img/1545205287_222a3e965c1e790e415d0625ac4295b1.jpg">
      <h3>宠物饮水机滤芯</h3>
      <p>优质滤材 四重过滤</p>
    </div>
     <div class="list">
      <img src="/img/1569570372_69929adc53bb45f5309cea8a9d3447c2.jpg">
      <h3>智能宠物零食机</h3>
      <p>智能“逗猫” 远程“遛狗”</p>
    </div>
    <div class="list">
      <img src="../../dist/img/1546089694_d183db447c17db4bec0ba5110d0653ef.jpg">
      <h3>宠物饮水机</h3>
      <p>呵护爱宠 健康饮水</p>
    </div>
    <div class="on">
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
*{
  margin: 0 auto;
  font-family: 微软雅黑;
}
.container{
  width: 100%;
  max-width: 1080px;
 margin: 0 auto;
 display: flex;
 padding-bottom: 80px;
}
.container>.list{
  width: 33%;
  margin: 0 30px;
  text-align: center;
  cursor: pointer;
}
.container>.list>img{
  width: 77.78%;
  height: 77.78%;
}
.container>.list>h3{
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 400;
}
.container>.list>p{
  font-size: 18px;
  color: #666;
  padding: 0 55px;
}

</style>