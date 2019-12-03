<template>
  <div id="app">
    <div class="kehu">客户账户</div>
    <div class="inp">
      <input type="text" placeholder="输入客户名、手机号、备注名" v-model="suo">
      <button @click="sou()">搜索</button>
    </div>
    <div id="nav">
      <router-link to="/">全部</router-link>
      <router-link to="/about">云进货商</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
      lists:[],
      suo:''
    }
  },
  computed:{

  },
  methods:{
    sou(){
      this.suosou(this.suo)
    },
    async suosou(so){
      await axios.post('/api/sousuo',{sou:so}).then(res=>{
        this.lists = res.data.msg
      })
      this.$bus.$emit('xin',this.lists);
    }
  },
  created(){
    
  },
  mounted(){

  }
}
</script>
<style scoped lang="">

</style>