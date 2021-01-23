<template>
  <div>
    <h2>Vuex</h2>
    <p>来自vuex的值{{getname}}</p>
    <input type="button" name="but" value="单击传值" @click="changen">
  </div>
</template>
<script>
export default {
  name:"Left",
  data(){
    return{}
  },
  computed:{
    getname:function(){
      return this.$store.state.name;
    }
  },
  methods:{
    changen:function(){
      this.$store.commit("changeName","tom")
    }
  }
}
</script>