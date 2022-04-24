<template>
  <div class="App-container">
    <AppMenu/>
    <AppHeader/>
    <AppMainContent/>
  </div>
</template>

<script setup lang="ts">
import AppMenu from './AppMenu.vue';
import AppHeader from './AppHeader.vue';
import AppMainContent from './AppMainContent.vue';
</script>

<style lang="scss" scoped>
@import './App.scss';
</style>
