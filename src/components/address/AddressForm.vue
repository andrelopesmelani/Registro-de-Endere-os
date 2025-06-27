<template>
  <div class="addressForm-section">
    <v-row dense>
      <v-col cols="12">
        <InputText
          v-model:value="form.title"
          :label="$t('address.table.title')"
          :disabled="readonly"
          :error="!!errors.title"
          :error-messages="errors.title"
        />
      </v-col>

      <v-col cols="12" sm="6">
        <InputText
          v-model:value="form.zip_code"
          :label="$t('address.table.zip_code')"
          placeholder="00000-000"
          :error="!!errors.zip_code"
          :error-messages="errors.zip_code"
          @blur="$emit('zip-blur')"
          @input="onZipInput"
        />
      </v-col>

      <v-col cols="12" sm="6">
        <InputText
          v-model:value="form.state"
          maxlength="2"
          :label="$t('address.table.state')"
          :disabled="readonly"
          :error="!!errors.state"
          :error-messages="errors.state"
        />
      </v-col>

      <v-col cols="12">
        <InputText
          v-model:value="form.street"
          :label="$t('address.table.street')"
          :disabled="readonly"
          :error="!!errors.street"
          :error-messages="errors.street"
        />
      </v-col>

      <v-col cols="12">
        <InputText
          v-model:value="form.complement"
          :label="$t('address.table.complement')"
          :disabled="readonly"
        />
      </v-col>

      <v-col cols="12" sm="6">
        <InputText
          v-model:value="form.neighborhood"
          :label="$t('address.table.neighborhood')"
          :disabled="readonly"
          :error="!!errors.neighborhood"
          :error-messages="errors.neighborhood"
        />
      </v-col>

      <v-col cols="12" sm="6">
        <InputText
          v-model:value="form.locality"
          :label="$t('address.table.locality')"
          :disabled="readonly"
          :error="!!errors.locality"
          :error-messages="errors.locality"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import InputText from '../inputs/InputText.vue'
import type { Address } from '@/types/types'
import { defineProps, defineEmits } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  form: Object as () => Address,
  errors: Object as () => Partial<Record<keyof Address, string>>,
  readonly: Boolean,
})

const emit = defineEmits(['zip-blur', 'zip-input'])

function onZipInput(event: Event) {
  const input = event.target as HTMLInputElement
  emit('zip-input', input.value)
}
</script>
