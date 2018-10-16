import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Lost from './components/lost.vue'

//import User from './components/user/User.vue'
// import UserStart from './components/user/UserStart.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'

const User = resolve =>{
  require.ensure(['./components/user/User.vue'],()=>{
    resolve(require('./components/user/User.vue'));
  });
}
const UserDetail = resolve =>{
  require.ensure(['./components/user/UserDetail.vue'],()=>{
    resolve(require('./components/user/UserDetail.vue'));
  });
}
const UserStart = resolve =>{
  require.ensure(['./components/user/UserStart.vue'],()=>{
    resolve(require('./components/user/UserStart.vue'));
  });
}
const UserEdit = resolve =>{
  require.ensure(['./components/user/UserEdit.vue'],()=>{
    resolve(require('./components/user/UserEdit.vue'));
  });
}


export const routes = [
  {path:'',name:'主页',
    components:{
      'header-top':Header,
      default:Home
    },
  },
  {path:'/user',components:{
      'header-top':Header,
      default:User
    },children:[
    {path:'',component:UserStart},
    {path:':id',component:UserDetail,beforeEnter:(to,from,next)=>{
      console.log('inside route');
      next();
    }},
    {path:':id/edit',component:UserEdit,name:'用户编辑'}
  ]},
  {
    path:'/lost',
    name:'404',
    component:Lost
  },
  {
    path:'*',redirect:{name:'404'}
  }
];