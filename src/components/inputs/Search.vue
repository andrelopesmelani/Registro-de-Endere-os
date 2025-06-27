<template>
  <v-text-field
    density="compact"
    :placeholder="t('search.placeholder')"
    prepend-inner-icon="mdi-magnify"
    variant="solo"
    class="mt-4 mx-2 custom-search"
    hide-details
    :model-value="props.value"
    @update:modelValue="emit('update:value', $event)"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  value: string
}>()

const emit = defineEmits(['update:value'])

const { t } = useI18n()
</script>

<style scoped lang="scss">
.custom-search {
  ::v-deep(.v-field) {
    background-color: #535353;
    border-radius: 8px;
  }

  ::v-deep(.v-field__input) {
    color: #fff;
  }

  ::v-deep(.v-icon) {
    color: #fff;
  }
}
</style>
