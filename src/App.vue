<template>
  <div id="app" class="container">
    <div class="row">
      <h1>Routing APP.VUE</h1>
      <!-- <app-header></app-header> -->
      <router-view name="header-top"></router-view>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
      <router-view name="header-bottom"></router-view>
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

.slide-leave-active{
  transition: opacity .3s ease;
  opacity: 0;
  animation: slide-out .3s ease-out forwards;
}

.slide-leave{
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active{
  animation: slide-in .3s ease-out forwards;
}

@keyframes slide-out{
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}

  @keyframes slide-in {
    0%{
      transform: translateY(-30px);
    }
    100%{
      transform: tranlsateY(0);
    }
  }

</style>
