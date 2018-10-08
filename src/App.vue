<template>
  <div id="app" class="container">
    <div class="row">
      <h1>Routing</h1>
      <app-header></app-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import home from './components/Home.vue'
import header from './components/Header.vue'
export default {
  name: 'app',
  components:{
    home,
    appHeader:header
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
