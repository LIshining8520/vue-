import Vue from 'vue';
import headers from './component/headers.vue'
import footers from './component/footers.vue'
import products from './component/products.vue'
import contentsindex from './component/contents-index.vue'
import banners from './component/banners.vue'
import mains from './component/max.vue'
new Vue({
  el:"#product",
  data:{
    
  },
  
  
  components:{headers,banners,footers,products,contentsindex,mains}
  
})