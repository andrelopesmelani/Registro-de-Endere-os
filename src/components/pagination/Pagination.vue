<template>
  <nav class="pagination">
    <button
      class="btn"
      :disabled="currentPage === 1"
      @click="$emit('update:page', currentPage - 1)"
      aria-label="Página anterior"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </button>

    <button
      v-for="page in pagesToShow"
      :key="page"
      class="btn"
      :class="{ active: page === currentPage }"
      @click="$emit('update:page', page)"
    >
      {{ page }}
    </button>

    <button
      class="btn"
      :disabled="currentPage === totalPages"
      @click="$emit('update:page', currentPage + 1)"
      aria-label="Próxima página"
    >
      <v-icon>mdi-chevron-right</v-icon>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
})

const pagesToShow = computed(() => {
  const pages = []
  const start = Math.max(1, props.currentPage - 2)
  const end = Math.min(props.totalPages, props.currentPage + 2)
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  overflow-x: auto;
  padding: 4px 0;
}

.btn {
  height: 32px;
  min-width: 32px;
  background-color: #eee;
  border: none;
  border-radius: 50%;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #d4d4d4;
  }

  &:disabled {
    cursor: not-allowed;
    color: #999;
  }

  &.active {
    background-color: #1976d2;
    color: white;
  }
}

@media (max-width: 500px) {
  .btn {
    font-size: 12px;
    height: 28px;
    min-width: 28px;
  }
}
</style>

