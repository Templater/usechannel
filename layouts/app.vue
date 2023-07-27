<script setup lang="ts"></script>

<template>
  <div id="app-layout">
    <Header />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped lang="scss">
#app-layout {
  width: 100%;
  height: 100%;

  main {
    height: 100%;
    margin-top: var(--header-height);
  }
}
</style>
