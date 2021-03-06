import Vue from 'vue'
import Router from 'vue-router'
import Wrong from  '@/components/Wrong'
import AllClassify from  '@/components/AllClassify'
import ClassifyList from '@/components/ClassifyList'
import Tou1 from '@/components/Tou1'
import Tou2 from '@/components/Tou2'
import End from '@/components/End'
import Jifen from '@/components/Jifen'
import shouye from '@/components/shouye'
import Introduction from '@/components/Introduction'
import Pay from '@/components/Pay'
import Pay1 from '@/components/Pay1'
import Pay3 from '@/components/Pay3'
import Shopping from '@/components/Shopping'
import Lian from '@/components/Lian'
import Lian1 from '@/components/Lian1'
import Enter from '@/components/Enter'
import New from '@/components/New'
import New1 from '@/components/New1'
import New2 from '@/components/New2'
import Yan from '@/components/Yan'
import Yan1 from '@/components/Yan1'
import Yan2 from '@/components/Yan2'
import High from '@/components/High'
import High1 from '@/components/High1'
import Intro1 from '@/components/Intro1'
import Intro2 from '@/components/Intro2'
import cart from '@/components/cart'
import ConfirmOrder from '@/components/ConfirmOrder'
import CountDown from '@/components/CountDown'
import Host from '@/components/Host'
import StoreClassify from '@/components/StoreClassify'
import Test from '@/components/Test'
import LinkAge from '@/components/LinkAge'
import TongC from '@/components/TongC'
import Map from '@/components/Map'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"shouye",
      component: shouye
    },
    {
      path:"/Map",
      name:"Map",
      component: Map
    },
    {
      path:"/TongC",
      name:"TongC",
      component: TongC
    },
    {
      path:"/tou1",
      name:"Tou1",
      component: Tou1
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
      path:"/cart",
      name:"cart",
      component: cart
    },
    {
      path:"/ConfirmOrder",
      name:"ConfirmOrder",
      component: ConfirmOrder
    },
    {
      path:"/shouye",
      name:"shouye",
      component: shouye
    },
    {
      path:"/Jifen",
      name:"Jifen",
      component: Jifen,
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
      path:"/high",
      name:"High",
      component:High
    },
    {
      path:"/high1",
      name:"High1",
      component:High1
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
      path:"/yan2",
      name:"Yan2",
      component:Yan2
    },
    {
      path:"/tou2",
      name:"Tou2",
      component: Tou2,

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
      path:"/pay3",
      name:"Pay3",
      component: Pay3
    },
    {
      path:"/shopping",
      name:"Shopping",
      component: Shopping
    },
  ]
})
