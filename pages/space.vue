<script setup lang="ts">
definePageMeta({
  layout: 'app',
})
</script>

<template>
  <div class="container">
    <h1>Team revenue</h1>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 3.5rem;
    text-align: center;
    transition: var(--fast-transition-duration);

    @include medium-screen {
      margin-top: 4rem;
    }
  }
}
</style>
