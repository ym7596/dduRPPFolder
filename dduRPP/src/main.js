import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.min.js'
import { store } from '/@store/index.js'
import { router } from '/@router/router.js'

createApp(App).use(store).use(router).mount('#app')
