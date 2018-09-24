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
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'


Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key]);
})
Vue.config.productionTip = false
Vue.use(VueAxios,axios,ElementUI,Vuex);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

