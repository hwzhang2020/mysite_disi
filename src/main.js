import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
Vue.L = Vue.prototype.$L = L


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css
import '@/icons' // icon
import '@/permission' // permission control

// set ElementUI lang to EN
//Vue.use(ElementUI, { locale })
Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
