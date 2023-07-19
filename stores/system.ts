export const useSystemStore = definePiniaStore('system', () => {
  type LayoutTransitionTarget = {
    width: number
    height: number
    top: number
    bottom: number
    left: number
    right: number
  }

  const layoutTransitionTarget: Ref<LayoutTransitionTarget> = ref({
    width: 0,
    height: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  })
  function setLayoutTransitionTarget(target: LayoutTransitionTarget): void {
    layoutTransitionTarget.value = target
  }

  function isLayoutTransitionTargetReady(): boolean {
    return !(
      layoutTransitionTarget.value.width === 0 &&
      layoutTransitionTarget.value.height === 0 &&
      layoutTransitionTarget.value.top === 0 &&
      layoutTransitionTarget.value.bottom === 0 &&
      layoutTransitionTarget.value.left === 0 &&
      layoutTransitionTarget.value.right === 0
    )
  }

  return {
    layoutTransitionTarget,
    setLayoutTransitionTarget,
    isLayoutTransitionTargetReady,
  }
})
