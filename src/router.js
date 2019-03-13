import Vue from 'vue'
import Router from 'vue-router'

import Contact from '@/components/views/Contact'
import Home from '@/components/views/Home'
import About from '@/components/views/About'
import Store from '@/components/views/Store'
import NotFound from '@/components/views/NotFound'

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
