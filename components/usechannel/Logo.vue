<script setup lang="ts">
import IconLogo from '@/assets/icons/logo.svg'

defineProps({
  type: {
    type: String as PropType<'default' | 'button' | 'home-link'>,
    required: false,
    default: 'default',
  },
})
</script>

<template>
  <div v-if="type === 'default'" class="logo">
    <IconLogo class="icon" />
  </div>
  <button v-else-if="type === 'button'" class="logo">
    <IconLogo class="icon" />
  </button>
  <NuxtLink v-else-if="type === 'home-link'" class="logo" to="/">
    <IconLogo class="icon" />
  </NuxtLink>
</template>

<style scoped lang="scss">
.logo {
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 999rem;
  box-shadow: var(--default-shadow);
  backdrop-filter: blur(var(--default-blur));
  background: var(--primary-color);

  @include medium-screen {
    width: 4.5rem;
    height: 4.5rem;
  }

  .icon {
    height: 1.25rem;
    fill: var(--black);
    transition: var(--fast-transition-duration);

    @include medium-screen {
      height: 1.625rem;
    }
  }
}

button.logo,
a.logo {
  cursor: pointer;
  transition: var(--fast-transition-duration);

  &:hover {
    background: color-with-opacity(var(--primary-color), 0.8);

    .icon {
      opacity: 0.95;
    }
  }

  &:active {
    background: color-with-opacity(var(--primary-color), 0.6);

    .icon {
      opacity: 0.9;
    }
  }
}
</style>
