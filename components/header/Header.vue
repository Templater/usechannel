<script setup lang="ts"></script>

<template>
  <header>
    <div class="left-side">
      <UsechannelLogo type="home-link" />
      <HeaderNavbar />
      <HeaderMe />
    </div>
    <div class="right-side">
      <HeaderCollaborators />
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  top: 0;
  left: 0;
  width: calc(100% - 1rem * 2);
  padding: 1rem;

  .left-side,
  .right-side {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
