<template>
  <div class="main__wrapper">
    <div class="main__header">
      <app-header></app-header>
    </div>
    <home-view></home-view>
  </div>
</template>

<script setup>
  import AppHeader from './layouts/AppHeader.vue';
  import HomeView from './views/HomeView.vue';
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
