<script setup lang="ts">
const systemStore = useSystemStore()
const layoutTransitionTarget: Ref<null | HTMLDivElement> = ref(null)

onBeforeUnmount(() => {
  if (layoutTransitionTarget.value === null) {
    return
  }

  const targetRect = layoutTransitionTarget.value.getBoundingClientRect()

  systemStore.setLayoutTransitionTarget({
    width: targetRect.width,
    height: targetRect.height,
    top: targetRect.top,
    bottom: targetRect.bottom,
    left: targetRect.left,
    right: targetRect.right,
  })
})
</script>

<template>
  <div class="container">
    <h1>Usechannel</h1>
    <div ref="layoutTransitionTarget">
      <UsechannelButton to="/space">Open work space</UsechannelButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
  text-align: center;
}
</style>
