import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'


import VuetifyDialog from './vuetifyDialog'


storiesOf('Dialogs', module)
  .addDecorator(withKnobs)
  .add('dialog-vuetify', () => ({
    components: {VuetifyDialog},
    template: '<VuetifyDialog/>'
  }))
