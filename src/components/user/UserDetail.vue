<template>
  <div>
    <h3>Some user detail</h3>
    <p>User id:{{id}}</p>
    <router-link tag="button" :to="'/user/'+$route.params.id+'/edit'">Edit User</router-link>
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
