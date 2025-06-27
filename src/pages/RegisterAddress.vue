<template>
  <v-container>
    <TitleSection :title="$t('address.title')">
      <template #action>
        <v-btn color="primary" @click="openDialog" class="d-flex align-center gap-1">
          <v-icon start>mdi-plus</v-icon>
          {{ $t('common.new') }}
        </v-btn>
      </template>
    </TitleSection>

    <Table :addresses="addresses" :headers="headers" @edit="editAddress" @delete="deleteAddress" />

    <AddressDialog v-model="isDialogOpen" :address="form" @save="saveAddress" />
  </v-container>
</template>

<script setup lang="ts">
import { useAddressForm } from '@/composables/useAddressForm'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const headers = computed(() => [
  { title: t('address.table.title'), key: 'title' },
  { title: t('address.table.zip_code'), key: 'zip_code' },
  { title: t('address.table.street'), key: 'street' },
  { title: t('address.table.neighborhood'), key: 'neighborhood' },
  { title: t('address.table.locality'), key: 'locality' },
  { title: t('address.table.state'), key: 'state' },
  { title: t('address.table.createdAt'), key: 'createdAt' },
  { title: t('address.table.updatedAt'), key: 'updatedAt' },
  { title: t('address.table.actions'), key: 'actions', sortable: false },
])

const {
  isDialogOpen,
  form,
  addresses,
  openDialog,
  save: saveAddress,
  edit: editAddress,
  remove: deleteAddress,
} = useAddressForm()
</script>
