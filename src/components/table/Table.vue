<template>
  <v-data-table :headers="headers" :items="paginatedItems" item-value="id" hide-default-footer class="table">
    <template #headers="{ columns }">
      <tr class="custom-header">
        <th v-for="column in columns" :key="column.key" class="text-grey-darken-1 font-weight-bold">
          {{ column.title }}
        </th>
      </tr>
    </template>

    <template #item="{ item, columns }">
      <tr>
        <td v-for="column in columns" :key="column.key">
          <template v-if="column.key === 'actions'">
            <v-btn icon @click="$emit('edit', item)" variant="text">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon color="error" @click="$emit('delete', item)" variant="text">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>

          <template v-else-if="$slots[`item.${column.key}`]">
            <slot :name="`item.${column.key}`" :item="item" />
          </template>

          <template v-else>
            <span :title="item[column.key]">
              {{ formatValue(column.key, item[column.key]) }}
            </span>
          </template>
        </td>
      </tr>
    </template>

    <template #bottom>
      <div class="footer-container d-flex justify-space-between align-center px-4 py-3">
        <span class="text-caption text-grey">{{ t('table.total') }}: {{ addresses.length }} {{ t('table.records') }}</span>
        <Pagination :currentPage="currentPage" :totalPages="totalPages" @update:page="page => currentPage = page" />
        <v-select
          v-model="itemsPerPage"
          :items="[5, 10, 15]"
          :label="t('table.itemsPerPage')"
          variant="outlined"
          density="compact"
          hide-details
          class="custom-select"
          style="max-width: 150px"
        />
      </div>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { PropType } from 'vue'
import type { Address } from '@/types/types'
import { formatDateHours } from '@/utils/formatter'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  addresses: {
    type: Array as PropType<Address[]>,
    required: true,
  },
  headers: {
    type: Array as PropType<any[]>,
    required: true,
  },
})

const currentPage = ref(1)
const itemsPerPage = ref(5)

const totalPages = computed(() => Math.ceil(props.addresses.length / itemsPerPage.value))

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  return props.addresses.slice(start, start + itemsPerPage.value)
})

watch(itemsPerPage, () => {
  currentPage.value = 1
})

watch(
  () => props.addresses.length,
  () => {
    if (currentPage.value > totalPages.value) currentPage.value = totalPages.value || 1
  }
)

function formatValue(key: string, value: any): string {
  if (!value) return '-'
  if (key === 'createdAt' || key === 'updatedAt') return formatDateHours(value, t)
  return value
}
</script>


<style scoped lang="scss">
.table {
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:nth-child(odd) {
    background-color: #ffffff;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }

  tbody td {
    padding: 12px !important;
    font-size: 14px;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
  }
}

.custom-header {
  background-color: #ffffff;

  th {
    padding: 12px;
    text-transform: uppercase;
    font-size: 14px;
  }
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 18px;

    .custom-select {
      width: 100%;
      max-width: none !important;
    }
  }

  .custom-select {
    max-width: 150px;
    min-width: 120px;
  }
}

.custom-select {
  .v-input__control {
    border-radius: 8px;
    background-color: #f8f8f8;
    border: 1px solid #dcdcdc;
  }

  .v-field__input {
    font-size: 14px;
    color: #333;
  }
}
</style>
