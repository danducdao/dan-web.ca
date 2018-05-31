import Vue from 'vue'
import Router from 'vue-router'
import FirstProgram from '@/components/first-program'
import Album from '@/components/Album'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/first-program',
      name: 'First program',
      component: FirstProgram
    },
    {
       path : '/Album',
       name : 'Album',
       component : Album
    }
  ]
})
