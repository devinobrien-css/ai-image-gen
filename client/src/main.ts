import { createPinia } from "pinia";
// must create pinia instant before router
const pinia = createPinia();
import { router } from "./router/router";
import { createApp } from 'vue';
import { Quasar, Notify } from 'quasar';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

// import './style.css';

import App from './App.vue';

createApp(App)
  .use(pinia)
  .use(router)
  .use(Quasar, {
    plugins: {},
  })
  .mount('#app');
