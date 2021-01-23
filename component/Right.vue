<template>
    <div id="vuextest">
        <h2>vuex-copy</h2>
        <p>来自vuex的值：{{getnewage}} </p>
        <input type="button" value="改变age值" v-on:click="changea" />
    </div>
</template>
<script>
export default {
    name:'Vuexcopy',
    data(){
        return{

        }
    },
    computed:{
        getnewage:function(){
            return this.$store.getters.getAge;
        }
    },
    methods:{
        // 异步计算用dispatch派发
        changea:function(){
            this.$store.dispatch('ageasync',20)
        }
    }
}
</script>