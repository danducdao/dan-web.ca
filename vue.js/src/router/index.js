import Vue from 'vue';
import Router from 'vue-router';
import FirstProgram from '@/components/first-program';
import LoopProgram from '@/components/loop-program';
import EventProgram from '@/components/event-program';
import StringProgram from '@/components/string-program';
import GoogleMap from '@/components/google-map';

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
       path : '/loop-program',
       name : 'Loop',
       component : LoopProgram
    },
    {
       path : '/event-program',
       name : 'Event',
       component : EventProgram
    },
    {
        path : '/string-program',
        name : 'string-program',
        component : StringProgram
    },{
      path : '/googleMap',
      name : 'google-map',
      component : GoogleMap
    }

  ]
})
