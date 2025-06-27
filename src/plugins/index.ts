
import vuetify from './vuetify'
import pinia from '../stores'
import router from '../router'

import type { App } from 'vue'
import { i18n } from '@/translate/i18n'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(i18n)
}
