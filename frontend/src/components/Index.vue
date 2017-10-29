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
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss">
  @import "../assets/sass/common";
</style>
