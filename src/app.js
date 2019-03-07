import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/dist/vuetify.min.css'

import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
