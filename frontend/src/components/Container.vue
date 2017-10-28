<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Django + Vue application :)'
      }
    }
  }
</script>
