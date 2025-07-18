import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import 'unfonts.css'
import '@/styles/settings.scss'
import router from '@/router'

const app = createApp(App)

registerPlugins(app)
app.use(router)

app.mount('#app')
