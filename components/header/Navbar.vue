<script setup lang="ts"></script>

<template>
  <nav>
    <UsechannelButton variant="selected">Work space</UsechannelButton>
    <UsechannelButton variant="transparent">Data sources</UsechannelButton>
    <UsechannelButton variant="transparent">Questions</UsechannelButton>
    <UsechannelButton variant="transparent">Definitions</UsechannelButton>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: none;
  gap: 0.25rem;
  border-radius: 999rem;
  box-shadow: var(--default-shadow);
  backdrop-filter: blur(var(--default-blur));
  background: color-with-opacity(var(--white-themed), 0.1);

  @include xl-screen {
    display: flex;
  }
}
</style>
