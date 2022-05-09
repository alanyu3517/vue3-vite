<template>
  <div :class="`AppMainContent-container ${!isMenu ? 'hidden-menu' : ''}`"></div>
</template>

<script setup lang="ts">
const store = useStore();

const isMenu = computed(() => store.state.isMenu);
</script>

<style lang="scss" scoped>
@import "./AppMainContent.scss";
</style>
