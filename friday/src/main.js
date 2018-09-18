// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import * as filters from './assets/filters/filters'
Vue.config.productionTip = false

<<<<<<< HEAD

=======
Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key]);
})
/* eslint-disable no-new */
>>>>>>> cc76777cfe4be4319145150e9b2fb74dfedeb4d7
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

