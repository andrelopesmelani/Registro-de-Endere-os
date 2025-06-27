<template>
  <v-app>
    <Header :toggleDrawer="toggleDrawer" />
    <Sidebar :isDesktop="isDesktop" :drawer="drawer" />

    <v-main :style="{ paddingLeft: mainPaddingLeft }" class="main-content">
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useDrawer } from '@/composables/useDrawer'

const { isDesktop, drawer, toggleDrawer, mainPaddingLeft } = useDrawer()
</script>

<style scoped lang="scss">
.main-content {
  padding: 80px 24px 24px 0;
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>
