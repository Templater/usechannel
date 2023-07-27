<script setup lang="ts">
import IconShare from '@/assets/icons/share.svg'
</script>

<template>
  <div class="collaborators">
    <UsechannelAvatar
      class="avatar"
      name="First collaborator (Viktoria Pozdnyak)"
    />
    <UsechannelAvatar
      class="avatar"
      name="Second collaborator (Maria Earhart)"
    />
    <button class="share">
      <IconShare class="icon" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.collaborators {
  display: flex;
  align-items: center;

  & > * {
    width: var(--header-group-height);
    height: var(--header-group-height);
    margin-left: -2.25rem;
    border-radius: 999rem;
    box-shadow: var(--default-shadow);
    transition: var(--fast-transition-duration);

    @include medium-screen {
      margin-left: -0.75rem;
    }
  }

  &:first-child {
    margin-left: 0;
  }

  .share {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    backdrop-filter: blur(var(--default-blur));
    background: color-with-opacity(var(--white-themed), 0.1);
    cursor: pointer;

    &:hover {
      background: color-with-opacity(var(--white-themed), 0.15);

      .icon {
        opacity: 0.95;
      }
    }

    &:active {
      background: color-with-opacity(var(--white-themed), 0.05);

      .icon {
        opacity: 0.9;
      }
    }

    .icon {
      height: var(--header-group-icon-height);
      fill: var(--white-themed);
      transition: var(--fast-transition-duration);
    }
  }
}
</style>
