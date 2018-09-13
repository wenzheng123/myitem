import Vue from 'vue'
import Router from 'vue-router'
import Wrong from  '@/components/Wrong'
import AllClassify from  '@/components/AllClassify'
import ClassifyList from '@/components/ClassifyList'
Vue.use(Router)

export default new Router({
  routes: [
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
    {
      path:'*',

      component:Wrong,
    }
  ]
})
