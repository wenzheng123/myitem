// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import axios from 'axios'
import router from './router'
import $ from 'jquery'
import * as filters from './assets/filters/filters'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false;
Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key]);
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

