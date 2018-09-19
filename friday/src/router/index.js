import Vue from 'vue'
import Router from 'vue-router'
import Wrong from  '@/components/Wrong'
import AllClassify from  '@/components/AllClassify'
import ClassifyList from '@/components/ClassifyList'
import Tou1 from '@/components/Tou1'
import Tou2 from '@/components/Tou2'
import End from '@/components/End'
import Introduction from '@/components/Introduction'
import Pay from '@/components/Pay'
import Pay1 from '@/components/Pay1'
import Shopping from '@/components/Shopping'
import Lian from '@/components/Lian'
import Lian1 from '@/components/Lian1'
import Enter from '@/components/Enter'
import New from '@/components/New'


import New1 from '@/components/New1'
import New2 from '@/components/New2'
import Yan from '@/components/Yan'
import Yan1 from '@/components/Yan1'




import Intro1 from '@/components/Intro1'
import Intro2 from '@/components/Intro2'
import CountDown from '@/components/CountDown'
import Host from '@/components/Host'
import StoreClassify from '@/components/StoreClassify'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"Tou1",
      component: StoreClassify
    },
    {
      path:"/intro",
      name:"Introduction",
      component: Introduction,
      children:[
        {
          path:"/intro1",
          name:"Intro1",
          component: Intro1
        },
        {
          path:"/intro2",
          name:"Intro2",
          component: Intro2
        },
      ]
    },
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
      component:New,

    },
    {
      path:"/new1",
      name:"New1",
      component:New1,
    },

    {
      path:"/new2",
      name:"New2",
      component:New2,
    },
    {
      path:"/yan",
      name:"Yan",
      component:Yan
    },
    {
      path:"/yan1",
      name:"Yan1",
      component:Yan1
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
