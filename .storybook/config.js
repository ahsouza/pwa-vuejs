import { configure } from '@storybook/vue'
import '../src/assets/css/style.css'
const req = require.context('../src', true, /.stories.js$/);
 function loadStories()  {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);
