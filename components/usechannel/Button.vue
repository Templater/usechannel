<script setup lang="ts">
defineProps({
  variant: {
    type: String as PropType<'default' | 'transparent' | 'selected'>,
    required: false,
    default: 'default',
  },
  to: {
    type: String,
    required: false,
    default: '',
  },
})
</script>

<template>
  <button v-if="to === ''" class="button" :data-variant="variant">
    <slot />
  </button>
  <NuxtLink v-else class="button" :to="to" :data-variant="variant">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
.button {
  all: unset;
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 0 1.75rem;
  border-radius: 999rem;
  cursor: pointer;
  transition: var(--fast-transition-duration);

  @include medium-screen {
    height: 4.5rem;
    padding: 0 2rem;
  }

  &[data-variant='default'] {
    backdrop-filter: blur(var(--default-blur));
    background: color-with-opacity(var(--white-themed), 0.1);

    &:hover {
      background: color-with-opacity(var(--white-themed), 0.15);
    }

    &:active {
      background: color-with-opacity(var(--white-themed), 0.05);
      color: color-with-opacity(var(--white-themed), 0.9);
    }
  }

  &[data-variant='transparent'] {
    backdrop-filter: blur(var(--default-blur));
    background: transparent;

    &:hover {
      background: color-with-opacity(var(--white-themed), 0.05);
    }

    &:active {
      background: color-with-opacity(var(--white-themed), 0.1);
    }
  }

  &[data-variant='selected'] {
    backdrop-filter: blur(var(--default-blur));
    background: var(--white-themed);
    color: var(--black-themed);

    &:hover {
      background: color-with-opacity(var(--white-themed), 0.8);
      color: color-with-opacity(var(--black-themed), 0.95);
    }

    &:active {
      background: color-with-opacity(var(--white-themed), 0.6);
      color: color-with-opacity(var(--black-themed), 0.9);
    }
  }
}
</style>
