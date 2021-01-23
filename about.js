import Vue from 'vue';
import headers from './component/headers.vue'
import footers from './component/footers.vue'
import products from './component/products.vue'
import contentsindex from './component/contents-index.vue'
import about from './component/about.vue'
new Vue({
  el:"#about",
  data:{
    
  },
  
  
  components:{headers,footers,products,contentsindex,about}
  
})