<template>
  <div class="container">
      <div class="row">
        <ul class="nav nav-pills">
          <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
          <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss" <style lang="scss" scoped>

</style>
