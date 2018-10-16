import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import Home from './components/Home.vue'
//import User from './components/user/User.vue'
import {routes} from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    if(to.hash){
      return{selector:to.hash};
    }
    return{
      x:0,
      y:700
    }
  }
});

router.beforeEach((to,from,next)=>{
  //必须有next方法才能继续
  //next(false)终止跳转
  next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
