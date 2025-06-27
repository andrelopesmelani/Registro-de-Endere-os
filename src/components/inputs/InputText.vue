<template>
  <v-text-field density="compact" :model-value="props.value" :label="props.label"
    @update:modelValue="emit('update:value', $event)" :required="required" variant="outlined" :error="!!errorMessages"
    :error-messages="errorMessages" />
</template>

<script setup lang="ts">
const props = defineProps<{
  required?: boolean
  label: string
  value: string
  errorMessages?: string | string[]
}>()

const emit = defineEmits(['update:value'])
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
