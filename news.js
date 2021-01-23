import Vue from 'vue';
import headers from './component/headers.vue'
import footers from './component/footers.vue'
import products from './component/products.vue'
import contentsindex from './component/contents-index.vue'
import contain from './component/contents-news.vue'
new Vue({
  el:"#news",
  data:{
    
  },
  
  
  // components:{App,First,Second,Styles}
  components:{headers,footers,products,contentsindex,contain}
})