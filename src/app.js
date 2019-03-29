import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: colors.purple,
    secondary: colors.grey.darken1,
    info: colors.blue.lighten2,
    success: '#4CAF50',
    warning: '#FFC107',
    accent: colors.shades.black,
    error: colors.red.accent3
  },
  iconfont: 'mdi'
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
