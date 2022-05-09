<template>
  <div :class="`AppMenu-container ${!isMenu ? 'hidden-menu' : ''}`"></div>
</template>

<script setup lang="ts">
const store = useStore();

const isMenu = computed(() => store.state.isMenu);
</script>

<style lang="scss" scoped>
@import "./AppMenu.scss";
</style>
