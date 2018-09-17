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


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"Tou1",
      component: Tou1
    },
    {
      path:"/shouye",
      name:"shouye",
      component: shouye
    },
    {
      path:"/Jifen",
      name:"Jifen",
      component: Jifen
    },
    {
      path:"/tou2",
      name:"Tou2",
      component: Tou2,
      children:[
        {
          path:'/allclassify',
          component:AllClassify,
        },
      ]
    },
    {
      path:"/end",
      name:"End",
      component: End
    },
    {
      path: '/',
      component: Wrong,
    },
  ]
})
