import Vue from 'vue'
import Router from 'vue-router'
import Tou1 from '@/components/Tou1'
import Tou2 from '@/components/Tou2'
import End from '@/components/End'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"Tou1",
      component: Tou1
    },
    {
      path:"/tou2",
      name:"Tou2",
      component: Tou2
    },
    {
      path:"/end",
      name:"End",
      component: End
    }
  ]
})
