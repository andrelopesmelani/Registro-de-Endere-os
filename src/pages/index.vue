<template>
  <v-container>
    <template v-if="lastThreeAddresses.length === 0">
      <EmptyState
        :title="$t('emptyState.noAddresses')"
        :subtitle="$t('emptyState.registerAddressHint')"
      />
    </template>

    <div v-else>
      <TitleSection :title="$t('titleSection.lastRegisteredAddresses')" />
      <v-row dense>
        <v-col v-for="address in lastThreeAddresses" :key="address.id" cols="12" sm="6" md="4">
          <AddressPreview :address="address" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAddressStore } from '@/stores/address'
import type { Address } from '@/types/types'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const addressStore = useAddressStore()

const lastThreeAddresses = computed<Address[]>(() => {
  return [...addressStore.addresses]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3)
})
</script>
