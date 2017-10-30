<template>
  <div class="wrapper">
    <header class="mb-5">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container">
          <router-link :to="{name: 'folderIndex'}" class="navbar-brand logo">Wiki</router-link>
        </div>
      </nav>
    </header>
    <main class="container">
      <router-view @error="onError"></router-view>
    </main>
  </div>
</template>

<style lang="scss">
  @import "../assets/sass/common";
</style>

<script>
  import token from '../token';

  export default {
    methods: {
      onError(e) {
        if (e.response && e.response.status === 401) {
          token.remove();
          this.$router.push({name: 'login'});
        }
      }
    }
  }
</script>
