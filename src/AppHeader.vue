<template>
  <div :class="`AppHeader-container ${!isMenu ? 'hidden-menu' : ''}`">
    <div class="header-container">
      <div class="menu">
        <icon-mdi-menu class="icon" @click="triggerMenu" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useStore();

const isMenu = computed(() => store.state.isMenu);

const triggerMenu = () => {
  store.state.isMenu = !store.state.isMenu;
};
</script>

<style scoped lang="scss">
@import "./AppHeader.scss";
</style>
