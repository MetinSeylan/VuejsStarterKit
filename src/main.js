import Vue from 'vue'
import store from './store/store'
import router from './route/index'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import './vendor';

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')