import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'

import VuetifyRadio from './vuetifyRadio'

storiesOf('Radios', module)
  .addDecorator(withKnobs)
  .add('radio-vuetify', () => ({
    components: {VuetifyRadio},
    template: '<VuetifyRadio/>'
  }))
