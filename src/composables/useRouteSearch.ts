import { ref, computed, watch } from 'vue'
import type { RouteItem } from '@/types/types'
import { useI18n } from 'vue-i18n'
import { routes } from '@/utils/routes'

export function useRouteSearch() {
  const { t } = useI18n()
  const search = ref('')

  const translatedRoutes = computed<RouteItem[]>(() =>
    routes.map(route => ({
      ...route,
      title: t(route.title),
    }))
  )

  const filteredRoutes = computed<RouteItem[]>(() => {
    if (!search.value) return translatedRoutes.value
    return translatedRoutes.value.filter(route =>
      route.title.toLowerCase().includes(search.value.toLowerCase())
    )
  })

  return {
    search,
    filteredRoutes,
  }
}
