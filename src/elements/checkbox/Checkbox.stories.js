import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'

import VuetifyCheckbox from './vuetifyCheckbox'

storiesOf('Checkboxs', module)
  .addDecorator(withKnobs)
  .add('checkbox-vuetify', () => ({
    components: {VuetifyCheckbox},
    template: '<VuetifyCheckbox/>'
  }))
