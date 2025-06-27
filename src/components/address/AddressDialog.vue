<template>
  <v-dialog v-model="isDialogVisible" max-width="900px">
    <v-card class="custom-dialog-card">
      <v-card-title>
        <span class="text-h6">
          {{ addressForm.id === 0 ? $t('address.newAddress') : $t('address.editAddress') }}
        </span>
      </v-card-title>

      <v-card-text class="modal-content">
        <div class="form-section">
          <AddressForm
            v-model:form="addressForm"
            :errors="fieldErrors"
            :readonly="addressForm.id !== 0"
            @zip-blur="fetchAddressByZip"
            @zip-input="formatZipCodeInput"
          />
        </div>

        <div class="preview-section" v-if="mdAndUp">
          <AddressPreview :address="addressForm" />
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="saveAddress">{{ $t('common.save') }}</v-btn>
        <v-btn variant="text" @click="cancelDialog">{{ $t('common.cancel') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import type { Address } from '@/types/types'
import { formatCep } from '@/utils/formatter'
import { fetchAddressByCep, isValidCep } from '@/composables/useAddressByCep'
import { useDisplay } from 'vuetify'
import { useI18n } from 'vue-i18n'

const { mdAndUp } = useDisplay()
const { t } = useI18n()

const props = defineProps({
  modelValue: Boolean,
  address: {
    type: Object as () => Address,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue', 'save'])
const isDialogVisible = ref(props.modelValue)
const addressForm = reactive<Address>({ ...props.address })

const fieldErrors = reactive<Record<keyof Address, string>>({
  title: '', zip_code: '', street: '', complement: '',
  neighborhood: '', locality: '', state: '',
  id: '', createdAt: '', updatedAt: ''
})

watch(() => props.modelValue, val => (isDialogVisible.value = val))
watch(isDialogVisible, (val) => {
  emit('update:modelValue', val)
  if (val) {
    Object.keys(fieldErrors).forEach(key => {
      fieldErrors[key as keyof typeof fieldErrors] = ''
    })
  }
})
watch(() => props.address, newVal => Object.assign(addressForm, newVal))

function formatZipCodeInput(value: string) {
  addressForm.zip_code = formatCep(value)
}

async function fetchAddressByZip() {
  try {
    const data = await fetchAddressByCep(addressForm.zip_code)
    if (!data) return
    Object.assign(addressForm, {
      street: data.logradouro || '',
      complement: data.complemento || '',
      neighborhood: data.bairro || '',
      locality: data.localidade || '',
      state: data.uf || ''
    })
  } catch (err) {
    alert(err.message)
  }
}

async function saveAddress() {
  const requiredFields: (keyof Address)[] = ['title', 'zip_code', 'street', 'neighborhood', 'locality', 'state']
  let isValid = true

  requiredFields.forEach(field => {
    fieldErrors[field] = addressForm[field] ? '' : t('validation.requiredField')
    if (!addressForm[field]) isValid = false
  })

  if (!isValidCep(addressForm.zip_code)) {
    fieldErrors.zip_code = t('validation.invalidZip')
    isValid = false
  } else {
    try {
      const data = await fetchAddressByCep(addressForm.zip_code)
      if (!data) {
        fieldErrors.zip_code = t('validation.zipNotFound')
        isValid = false
      }
    } catch {
      fieldErrors.zip_code = t('validation.zipFetchError')
      isValid = false
    }
  }

  if (!isValid) return

  emit('save', { ...addressForm })
  emit('update:modelValue', false)
}

function cancelDialog() {
  emit('update:modelValue', false)
}
</script>

<style scoped lang="scss">
.custom-dialog-card {
  border: 1px solid #dcdfe6;
  border-radius: 16px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.modal-content{
  display: flex;
  align-items: center;
  gap: 24px;
}

.form-section {
  flex: 1.5;
  min-width: 0;
}

.preview-section {
  flex: 1;
  min-width: 0;
}

@media (max-width: 600px) {
  .form-section {
    padding-right: 0px;
    flex: 1;
  }
}
</style>
