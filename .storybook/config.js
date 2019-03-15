import {config} from '@storybook/vue'

const req = require.context('../src/patterns/QuoteSteppers', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

config(loadStories, module)
