import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import dateFilter from '@/filters/date.filter'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false
Vue.filter('date', dateFilter);
Vue.use(VueMeta);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const arr = [34, 45];
