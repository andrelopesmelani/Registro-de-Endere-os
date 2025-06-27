<template>
  <div class="empty-state">
    <span>{{ title }}</span>
    <p>{{ subtitle }}</p>
    <v-btn color="primary" @click="goToRegister" class="d-flex align-center gap-1">
      <v-icon start>mdi-plus</v-icon>
      {{ t('common.new') }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

defineProps<{
  title: string
  subtitle: string
}>()

function goToRegister() {
  router.push('/register-address')
}
</script>

<style scoped lang="scss">
@import "../../styles/variables.scss";

.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  padding: 2rem;
  background-color: $white;
  border-radius: 4px;
  height: 81vh;
  text-align: center;

  span {
    @include heading-semibold($text-heading);
  }

  p {
    @include text-md($gray-light);
  }
}
</style>
