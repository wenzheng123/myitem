// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
Vue.use(VueAxios,axios);
import * as filters from './assets/filters/filters'
Vue.config.productionTip = false
Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key]);
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

