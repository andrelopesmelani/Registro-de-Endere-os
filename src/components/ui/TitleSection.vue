<template>
  <div class="title-section d-flex justify-space-between align-center mb-8">
    <h2 class="title-text">{{ title }}</h2>
    <slot name="action" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<style scoped lang="scss">
.title-section {
  padding: 0 8px;
}

.title-text {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  color: #2e3440;
}
</style>
