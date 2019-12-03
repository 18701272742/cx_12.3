<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <div class="kuai">
        <div class="left_img">
          <img :src="item.lie_tou" alt="">
        </div>
        <div>
          <div>{{item.lie_name}}</div>
          <div>{{item.lie_jie}}</div>
        </div>
        <div>{{item.lie_jia}}</div>
      </div>
    </div>
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
      list:this.xin
    }
  },
  computed:{
    
  },
  methods:{
    xuanran(){
      axios.post('/api/list').then(res=>{
        this.list = res.data.msg
      })
    },
  },
  created(){
    this.$bus.$on('xin',(res)=>{
      this.list = res
    });
    this.xuanran()
  },
  mounted(){

  }
}
</script>
<style scoped lang="">

</style>