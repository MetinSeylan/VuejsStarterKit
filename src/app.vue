<template>
  <div id="app" style="text-align: center;">
    <img src="./assets/img/logo.png">
    <h1 v-if="loader">Loader Burası</h1>
    <div>
      <span class="flag-icon flag-icon-tr"></span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loader: false
    }
  }
}
</script>


<style lang="sass">

  @import "assets/style/app"

</style>