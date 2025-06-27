<template>
  <div class="address-card">
    <div class="image-container">
      <img src="/src/assets/images/place.jpg" alt="Address" class="address-image" />
    </div>

    <div class="address-details">
      <h3>{{ address.title || '-' }}</h3>

      <div class="text-container">
        <span>{{ $t('address.table.zip_code') }}:</span>
        <p>{{ address.zip_code }}</p>
      </div>

      <div class="text-container">
        <span>{{ $t('address.table.street') }}:</span>
        <p>{{ address.street }}</p>
      </div>

      <div class="text-container">
        <span>{{ $t('address.table.neighborhood') }}:</span>
        <p>{{ address.neighborhood }}</p>
      </div>

      <div class="text-container">
        <span>{{ $t('address.table.complement') }}:</span>
        <p>{{ address.complement || '-' }}</p>
      </div>

      <div class="text-container">
        <span>{{ $t('address.table.locality') }}:</span>
        <p>{{ address.locality }} - {{ address.state }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Address } from '@/types/types'
import { useI18n } from 'vue-i18n'

const props = defineProps<{ address: Address }>()

const { t } = useI18n()
</script>

<style scoped lang="scss">
@import '../../styles/variables.scss';

.address-card {
  border-radius: 16px;
  background-color: $white;

  .image-container {
    position: relative;
    width: 100%;
    height: 200px;
  }

  .address-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 16px 16px 0 0;
  }

  .address-details {
    padding: 18px;
    background-color: $white;
    border-radius: 0 0 16px 16px;
    border: 1px solid $gray-border-light;

    .text-container {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 12px 0;

      span {
        @include text-md-bold($gray-light);
      }

      p {
        @include text-md($gray-light);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
