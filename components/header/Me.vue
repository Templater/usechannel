<script setup lang="ts">
import IconBell from '@/assets/icons/bell.svg'
</script>

<template>
  <div class="me">
    <UsechannelButton class="notification" variant="transparent">
      <IconBell class="icon" />
    </UsechannelButton>
    <div class="avatar-container">
      <UsechannelAvatar name="It's me!" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.me {
  display: flex;
  gap: 0.25rem;
  border-radius: 999rem;
  box-shadow: var(--default-shadow);
  backdrop-filter: blur(var(--default-blur));
  background: color-with-opacity(var(--white-themed), 0.1);

  .notification {
    &:hover .icon {
      opacity: 0.95;
    }

    &:active .icon {
      opacity: 0.9;
    }

    .icon {
      height: var(--header-group-icon-height);
      fill: var(--white-themed);
      transition: var(--fast-transition-duration);
    }
  }

  .avatar-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--header-group-height);
    height: var(--header-group-height);
    transition: var(--fast-transition-duration);

    .avatar {
      width: calc(var(--header-group-height) - 1rem);
      height: calc(var(--header-group-height) - 1rem);
      cursor: pointer;
      transition: var(--fast-transition-duration);

      &:hover {
        opacity: 0.8;
      }

      &:active {
        opacity: 0.6;
      }
    }
  }
}
</style>
