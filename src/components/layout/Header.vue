<template>
  <v-app-bar flat app color="grey-darken-4" class="text-white">
    <v-app-bar-nav-icon @click="toggleDrawer" />
    <v-toolbar-title class="ml-2">WeON Address</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-select
      v-model="currentLocale"
      :items="locales"
      item-title="label"
      item-value="value"
      dense
      hide-details
      style="max-width: 150px"
    />
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

defineProps<{ toggleDrawer: () => void }>()

const { locale } = useI18n()

const locales = [
  { label: 'Português', value: 'pt' },
  { label: 'English', value: 'en' },
]

const currentLocale = ref(locale.value)

watch(currentLocale, (newLocale) => {
  locale.value = newLocale
})
</script>

<style scoped lang="scss">
.v-app-bar {
  z-index: 10 !important;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  padding: 0px 20px;
}
</style>
