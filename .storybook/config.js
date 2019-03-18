import {config} from '@storybook/vue'

const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

config(loadStories, module)
