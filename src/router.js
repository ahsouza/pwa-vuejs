import Vue from 'vue'
import Router from 'vue-router'

import Contact from '@/templates/Contact'
import Home from '@/templates/Home'
import About from '@/templates/About'
import Store from '@/templates/Store'
import NotFound from '@/templates/NotFound'

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
