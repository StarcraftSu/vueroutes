import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import Home from './components/Home.vue'
//import User from './components/user/User.vue'
import {routes} from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
