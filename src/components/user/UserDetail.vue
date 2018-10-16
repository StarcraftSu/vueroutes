<template>
  <div>
    <h3>Some user detail</h3>
    <p>User id:{{id}}</p>
    <router-link tag="button" :to="link">Edit User</router-link>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      id: this.$route.params.id,
      link: {
        name: "用户编辑",
        params: {
          id: this.id
        },
        query: {
          local: "en",
          q: 100
        },
        hash: "#data"
      }
    };
  },
  beforeRouteEnter(to,from,next){
    //不能获得this.link 因为这个components还没有加载
    next(vm=>{
      console.log(vm.link);
    });
  }
};
</script>

<style scoped>
</style>
