import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import focusDirective from './directive/v-focus';
import './assets/css/global.css'
import './assets/css/_themes.css'
Vue.directive('focus', focusDirective);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
