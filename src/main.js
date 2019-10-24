import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import MessagePlugin from '@/plugins/message.plugin'
import dateFilter from '@/filters/date.filter'
import tooltipDir from '@/directives/tooltip.directive'
import Paginate from 'vuejs-paginate/dist/index'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false
Vue.filter('date', dateFilter);
Vue.directive('tooltip', tooltipDir);
Vue.use(VueMeta);
Vue.use(MessagePlugin);
Vue.component('Paginate', Paginate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

