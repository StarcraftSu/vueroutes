<template>
  <div id="app" class="container">
    <div class="row">
      <home></home>
    </div>
  </div>
</template>

<script>
import home from './components/Home.vue'
export default {
  name: 'app',
  components:{
    home
  },
  data () {
    return {
     
    }
  },
  methods:{
    testJquery(){
      $('#app').on('click',()=>{
        
      })
    }
  },
  mounted(){
    this.testJquery()
  }
}
</script>

<style lang="scss">
#app {

  margin-top: 60px;
}

</style>
