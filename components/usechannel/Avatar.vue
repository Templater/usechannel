<script setup lang="ts">
import BoringAvatar from 'vue-boring-avatars'

defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <BoringAvatar
    class="avatar"
    :size="64"
    :colors="['#f3e9e1', '#fffeeb', '#cb9fcf', '#ab526b', '#fefde9']"
    :name="name"
    variant="beam"
  />
</template>

<style scoped lang="scss"></style>
