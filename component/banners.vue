<template>
 <div class="swiper-container">
      <div class="swiper-wrapper">
        <div  v-for="v in banners" :key="v.id" class="swiper-slide modBanner" >
          <img
            :src="'http://www.qhdlink-student.top/'+v.path_banner"
            class=""
          />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
</template>
<script>
  import Swiper from "swiper";
  import axios from 'axios'
  import qs from 'qs'
import "../../node_modules/swiper/dist/css/swiper.min.css";

  export default {
    data(){
      return{
        banners:null,
      }
    },
  mounted(){
     this.$nextTick(() => {
      var mySwiper = new Swiper(".swiper-container", {
        pagination: ".swiper-pagination",
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        // autoplay: 2500,
        autoplayDisableOnInteraction: false,
        effect: "slide",
        loop: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
      });
    });
    axios({
        url:"http://www.qhdlink-student.top/student/banner.php",
        method:"POST",
       data:{username:"lsn",userpwd:12345678,userclass:61,type:2},
        transformRequest:[function(data){
          return qs.stringify(data)
        }],
        headers:{"Content-Type":"application/x-www-form-urlencoded"}
      }).then(value=>{
        this.banners=value.data
        console.log(this.banners);
      })
  }
  }
</script>
<style scoped>
.swiper-container{
  height:690px;
  width: 100%;
}
.swiper-container img{
  width: 100%;
}

</style>