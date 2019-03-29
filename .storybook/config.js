import { configure } from '@storybook/vue'
import stonesTheme from './stonesTheme'
import {setConsoleOptions} from '@storybook/addon-console'
import '../src/assets/css/style.css'
import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.base,
    info: colors.blue.lighten2,
    accent: colors.green.lighten1,
    error: colors.red.darken2
  }
})

setConsoleOptions({
  panelExclude: [],
})


const req = require.context('../src', true, /.stories.js$/)
 function loadStories()  {
  req.keys().forEach(filename => req(filename))

}

configure(loadStories, module, {options: { theme: stonesTheme} },  (storyFn, context) => withConsole()(storyFn)(context))
