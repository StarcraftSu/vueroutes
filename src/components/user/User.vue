<template>
  <div>
    <h2>User</h2>
    <p>I am a loyal user</p>
    <hr>
    <button role="button" class="btn btn-primary" @click="navigateToHome">Go to home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'user',
  // data () {
  //   return {
  //     id:this.$route.params.id
  //   }
  // },
  // watch:{
  //   '$route'(to,from){
  //       this.id = to.params.id;
  //   }
  // },
  methods:{
    navigateToHome(){
      this.$router.push({
        path:'/'
      });
    }
  }
}
</script>

<style lang="scss" <style lang="scss" scoped>

</style>
