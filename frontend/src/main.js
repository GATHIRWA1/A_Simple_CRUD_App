import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLocalStorage from 'vue-localstorage'





createApp(App).use(store).use(VueLocalStorage).use(router).mount('#app');