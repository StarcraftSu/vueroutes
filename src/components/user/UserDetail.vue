<template>
  <div>
    <h3>Some user detail</h3>
    <p>User id:{{id}}</p>
    <router-link tag="button" :to="{name:'用户编辑',params:{id:$route.params.id},query:{local:'en',q:100}}">Edit User</router-link>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     id:this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>
