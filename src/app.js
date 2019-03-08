import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  theme: {
    primary: colors.purple,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  },
  iconfont: 'mdi'
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
