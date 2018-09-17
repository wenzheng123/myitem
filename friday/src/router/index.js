import Vue from 'vue'
import Router from 'vue-router'
import Wrong from  '@/components/Wrong'
import AllClassify from  '@/components/AllClassify'
import ClassifyList from '@/components/ClassifyList'
import Tou1 from '@/components/Tou1'
import Tou2 from '@/components/Tou2'
import End from '@/components/End'

import Pay from '@/components/Pay'
import Pay1 from '@/components/Pay1'
import Shopping from '@/components/Shopping'
import Lian from '@/components/Lian'
import Lian1 from '@/components/Lian1'
import Enter from '@/components/Enter'
import New from '@/components/New'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path:"/",
      name:"Tou1",
      component: Tou1
    },
    {
      path:"/lian",
      name:"Lian",
      component:Lian
    },
    {
      path:"/lian1",
      name:"Lian1",
      component:Lian1
    },
    {
      path:"/enter",
      name:"Enter",
      component:Enter
    },
    {
      path:"/new",
      name:"New",
      component:New
    },
    {
      path:"/tou2",
      name:"Tou2",
      component: Tou2,
      children:[
        {

          path:'/allclassify',
          component:AllClassify,
          children:[
            {
              path:'/classifylist',
              component:ClassifyList
            }
          ]
        },
      ]
    },
    {
      path:"/end",
      name:"End",
      component: End
    },
    {

      path:"/pay",
      name:"Pay",
      component: Pay
    },
    {

      path:"/pay1",
      name:"Pay1",
      component: Pay1
    },
    {
      path:"/shopping",
      name:"Shopping",
      component: Shopping
    },
    {
      path: '*',
      component: Wrong,

    },
  ]
})
