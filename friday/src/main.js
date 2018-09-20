// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import axios from 'axios'
import router from './router'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as filters from './assets/filters/filters'
<<<<<<< HEAD
Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key]);
})
Vue.config.productionTip = false
Vue.use(VueAxios,axios);


/* eslint-disable no-new */
=======
Vue.config.productionTip = false;

// Vue.prototype.$axios = axios
Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key]);
});
>>>>>>> 709f1e95c998583f0a99ba8b2e9fd288793c9282

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

