import Vue from 'vue'
import Router from 'vue-router'

import Contact from '@/components/Contact'
import Home from '@/components/Home'

import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Meus Contatos ',
      component: Contact
    },
    {
      path: '**',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
