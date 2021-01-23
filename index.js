import Vue from 'vue';
import headers from './component/headers.vue'
import footers from './component/footers.vue'
import banners from './component/banners.vue'
import products from './component/products.vue'
import pro from './component/productst.vue'
new Vue({
  el:"#ex",
  data:{
    
  },
  
  
  // components:{App,First,Second,Styles}
  components:{headers,footers,banners,products,pro}
})