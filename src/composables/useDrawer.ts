import { ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'

export function useDrawer() {
  const { mdAndUp } = useDisplay()

  const isDesktop = computed(() => mdAndUp.value)
  const drawer = ref(isDesktop.value)

  watch(isDesktop, (val) => {
    drawer.value = val
  })

  function toggleDrawer() {
    drawer.value = !drawer.value
  }

  const mainPaddingLeft = computed(() => {
    return isDesktop.value && drawer.value ? '264px' : '0px'
  })

  return {
    isDesktop,
    drawer,
    toggleDrawer,
    mainPaddingLeft
  }
}
