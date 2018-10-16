<template>
  <div>
    <h3>Edit User</h3>
    <p>Local:{{$route.query.local}}</p>
    <p>Analytics:{{$route.query.q}}</p>
    <hr>
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <div style="height:700px"></div>
    <p id="data">Some extra Data</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      confirmed:false
    }
  },
  methods:{

  },
  //跳转之前的验证
  beforeRouteLeave(to,from,next){
    if(this.confirmed){
      next();
    }else{
      if(confirm('Are you sure?')){
        next();
      }else{
        next(false);
      }
    }
  }
}
</script>

<style scoped>

</style>
