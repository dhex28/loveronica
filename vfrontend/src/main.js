import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/admin/css/styles.min.css';

import axios from'axios'


axios.defaults.baseURL = "http://veronica_backend.test/"

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
