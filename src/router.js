import Vue from 'vue'
import Router from 'vue-router'

import Contact from '@/components/Contact'
import Home from '@/components/Home'
import About from '@/components/views/About'
import Store from '@/components/views/Store'
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
      path: '/contacts',
      name: 'Meus Contatos ',
      component: Contact
    },
    {
      path: '/about',
      name: 'Sobre nós ',
      component: About
    },
    {
      path: '/store',
      name: 'Loja ',
      component: Store
    },
    {
      path: '**',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
