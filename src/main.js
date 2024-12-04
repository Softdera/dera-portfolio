import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './global.css';

//import VueLazyload from 'vue-lazyload'
//Vue.use(VueLazyload)


createApp(App).use(store).use(router).mount('#app')
