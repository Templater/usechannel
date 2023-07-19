<script setup lang="ts">
useHead({
  titleTemplate: title => (title ? `${title} - Usechannel` : 'Usechannel'),
  bodyAttrs: {
    'data-theme': 'dark',
  },
})

const systemStore = useSystemStore()

const defaultLayoutScale = computed(
  () => window.innerHeight / systemStore.layoutTransitionTarget.height
)
const defaultLayoutTranslateX = computed(
  () =>
    `${
      (window.innerWidth -
        systemStore.layoutTransitionTarget.right -
        systemStore.layoutTransitionTarget.left) /
      2 /
      16
    }rem`
)
const defaultLayoutOffsetY = computed(
  () =>
    `${
      (window.innerHeight -
        systemStore.layoutTransitionTarget.bottom -
        systemStore.layoutTransitionTarget.top) /
      2 /
      16
    }rem`
)
const appLayoutScale = computed(() =>
  systemStore.isLayoutTransitionTargetReady()
    ? systemStore.layoutTransitionTarget.height / window.innerHeight
    : 1
)
const appLayoutOffsetY = computed(() =>
  systemStore.isLayoutTransitionTargetReady()
    ? `${
        ((systemStore.layoutTransitionTarget.top -
          (window.innerHeight * appLayoutScale.value) / 2) *
          2) /
        16
      }rem`
    : 0
)
</script>

<template>
  <div class="app-container">
    <NuxtLayout />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Lufga';
  font-weight: 300;
  src:
    local('Lufga'),
    url(/assets/fonts/lufga-light.ttf) format('truetype');
}

@font-face {
  font-family: 'Lufga';
  font-weight: 400;
  src:
    local('Lufga'),
    url(/assets/fonts/lufga-regular.ttf) format('truetype');
}

@font-face {
  font-family: 'Lufga';
  font-weight: 500;
  src:
    local('Lufga'),
    url(/assets/fonts/lufga-medium.ttf) format('truetype');
}

* {
  margin: 0;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: 'Lufga', sans-serif;
}

body {
  display: flex;
  justify-content: center;
  @include dvw(width, 100);
  @include dvh(height, 100);
  scrollbar-width: none;
  background: var(--black-themed);
  line-height: var(--default-line-height);
  font-size: var(--default-font-size);
  font-weight: 400;
  color: var(--white-themed);
  transition: var(--default-transition);
  transition-property: background-color, color;

  &::-webkit-scrollbar {
    display: none;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}

h1 {
  line-height: var(--4xl-line-height);
  font-size: var(--4xl-font-size);
}

h2 {
  line-height: var(--3xl-line-height);
  font-size: var(--3xl-font-size);
}

h3 {
  line-height: var(--2xl-line-height);
  font-size: var(--2xl-font-size);
}

h4 {
  line-height: var(--xl-line-height);
  font-size: var(--xl-font-size);
}

h5 {
  line-height: var(--large-line-height);
  font-size: var(--large-font-size);
}

h6 {
  line-height: var(--medium-line-height);
  font-size: var(--medium-font-size);
}

.app-container {
  height: 100%;

  #default-layout,
  #app-layout {
    position: absolute;
    top: 0;
    left: 0;
  }
}

.layout-enter-active,
.layout-leave-active {
  transition: var(--default-transition);
  transition-duration: 1.25s;
}

#default-layout.layout-enter-from,
#default-layout.layout-leave-to {
  z-index: 100;
  opacity: 0;
  transform: scale(v-bind(defaultLayoutScale))
    translate(v-bind(defaultLayoutTranslateX), v-bind(defaultLayoutOffsetY));
}

#app-layout.layout-enter-from,
#app-layout.layout-leave-to {
  opacity: 0;
  transform: scale(v-bind(appLayoutScale)) translateY(v-bind(appLayoutOffsetY));
}
</style>
